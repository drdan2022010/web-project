import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LocalStorageService } from '../../service/storage-service/local-storage.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate{
  constructor(private router: Router, private notification: NzNotificationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (LocalStorageService.isUserLoggedIn()){
      this.router.navigateByUrl("/user/dashboard")
      this.notification.error("Error", "M co quyen dau", {nzDuration: 5000});
      return false;
  }
  else if (!LocalStorageService.hasToken()){
    LocalStorageService.signOut()
    this.router.navigateByUrl("/login");
    this.notification.error("Error", "Ban chua dang nhap", {nzDuration: 5000})
    return false;
  }
  return true;
};
}
