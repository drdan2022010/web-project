import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './AngularMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Make sure to import BrowserAnimationsModule
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { RegisterComponent } from './pages/register/register.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoginComponent } from './pages/login/login.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ViewAllComponent,
    RegisterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  // Fixed comma here
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,
    NzFormModule,
    NzSpinModule,
    AdminModule,
    UserModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US },
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
