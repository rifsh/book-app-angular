import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatModule } from '../mat-module/mat/mat.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditPrdctComponent } from './edit-prdct/edit-prdct.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminInterceptorInterceptor } from 'src/Interceptors/admin-interceptor.interceptor';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
]

@NgModule({
  declarations: [
    AdminLoginComponent,
    DashboardComponent,
    AdminUsersComponent,
    AdminProductsComponent,
    EditProductComponent,
    AddProductComponent,
    EditPrdctComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatModule,
    SharedModule
  ],
})
export class AdminModule { }
