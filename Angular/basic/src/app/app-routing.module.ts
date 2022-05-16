import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'service',component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
