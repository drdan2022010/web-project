import { Injectable } from '@angular/core';

const TOKEN ="I_TOKEN";
const USERID = "I_user";
const USERROLE = "I_role";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  saveUserId(userId: any) {
    window.localStorage.removeItem(USERID);
    window.localStorage.setItem(USERID, userId);
}

saveUserRole(role: any){
  window.localStorage.removeItem(USERROLE);
  window.localStorage.setItem(USERROLE, role);
}

saveToken(token: any){
  window.localStorage.removeItem(TOKEN);
  window.localStorage.setItem(TOKEN, token);
}

static getToken(): string {
  return localStorage.getItem(TOKEN) || '';
}

static hasToken(): boolean {
  if(this.getToken() === null){
    return false;
  }
return true;
}

static isUserLoggedIn(): boolean {
 if(this.getToken() === null){
   return false;
 }
 const role: string = this.getUserRole();
 return role == "USER"
}

static getUserRole(): string {
  const user = this.getUser();
  if (user === null) {
    return '';
  }
  return user.role;
}

static getUser(){
  const item = localStorage.getItem(USERID);
  return item ? JSON.parse(item) : null;
}

static isAdminLoggedIn(): boolean {
  if(this.getToken() === null){
    return false;
  }
  const role: string = this.getUserRole();
  return role == "ADMIN"
 }

  static signOut(){
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USERID);
    window.localStorage.removeItem(USERROLE);
  }
}
