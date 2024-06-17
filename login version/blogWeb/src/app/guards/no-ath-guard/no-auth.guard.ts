import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LocalStorageService } from '../../service/storage-service/local-storage.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate{

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (LocalStorageService.hasToken() && LocalStorageService.isUserLoggedIn()){
      this.router.navigateByUrl("/user/dashboard")
      return false;
  } else if(LocalStorageService.hasToken() && LocalStorageService.isAdminLoggedIn()){
    this.router.navigateByUrl("/admin/dashboard")
    return false;
  }
  return true;
}
}

