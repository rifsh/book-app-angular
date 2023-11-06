import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'sign-up', component:RegPageComponent},
  {path:'login', component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

