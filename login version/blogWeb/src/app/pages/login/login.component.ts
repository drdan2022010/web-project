import { Component } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LocalStorageService } from '../../service/storage-service/local-storage.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  validateForm!: FormGroup;
  isSpinning = false;

  constructor(private authService: AuthService, private fb:FormBuilder, private router:Router, private notification: NzNotificationService){}

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }
  isLoggedIn = false;
  login() {
    console.log(this.validateForm.value);
    this.authService.login(this.validateForm.get(['username'])!.value, this.validateForm.get(['password'])!.value).subscribe((res: any) => {
      this.isSpinning = false;
      if (res.success) {
        this.isLoggedIn = true; // Set isLoggedIn to true on successful login
        this.router.navigateByUrl("/create-post");
      } else if (LocalStorageService.isAdminLoggedIn()){
        this.router.navigateByUrl("/admin/dashboard");
      } else if (LocalStorageService.isUserLoggedIn()){
        this.router.navigateByUrl("/user/dashboard");
      }
    }, (error: any) => {
      console.log(error);
      if(error.status == 406){
        this.notification.error("Error", "chua dang ky", {nzDuration: 5000})
      } else {
        this.notification.error("Error", "sai cai gi do", {nzDuration: 5000}) 
      }
      this.isSpinning = false;
    });
  }
}
