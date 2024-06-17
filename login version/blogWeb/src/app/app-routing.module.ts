import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent },
  { path: 'view-all', component: ViewAllComponent },
  { path: "register", component:RegisterComponent},// Default route
  {path: "login", component: LoginComponent},
  {path:"admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"user", loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
