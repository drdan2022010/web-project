import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { LocalStorageService } from '../storage-service/local-storage.service';

const BASIC_URL = 'http://localhost:8080/'; 
export const AUTH_HEADER = "authorization";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 constructor(private http: HttpClient, private storageService: LocalStorageService) {}

  register(signupDTO: any): Observable<any> {
    return this.http.post<[]>( BASIC_URL +"sign-up", signupDTO);
  }

  login(username: string, password: string): any{
    return this.http.post<[]>(BASIC_URL + "authenticate", {username, password}, {observe: 'response'})
    .pipe(
      tap(_ => this.log("User Authentication")),
      map((res:HttpResponse<any>) => {
        this.storageService.saveUserId(res.body.userId);
        this.storageService.saveUserRole(res.body.role);
        const authHeader = res.headers.get(AUTH_HEADER);
        const tokenLength = authHeader?.length;
        const bearerToken = authHeader?.substring(7, tokenLength);
        this.storageService.saveToken(bearerToken);
        return { ...res, success: !!bearerToken };
      })
    )
}
  log(message: string): void {
    console.log(`User Auth Service: ${message}`);
}
}
