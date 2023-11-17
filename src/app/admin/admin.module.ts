import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatModule } from '../mat-module/mat/mat.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

const routes:Routes = [
  {path:'', component:AdminLoginComponent},
]

@NgModule({
  declarations: [
    AdminLoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatModule,
    SharedModule
  ]
})
export class AdminModule { }
