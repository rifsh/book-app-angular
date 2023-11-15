import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserProductsService } from './services/user-products.service';
import { FilterService } from './services/filter.service';
import { UserSrvcService } from './services/user-srvc.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorUrlComponent } from './error-url/error-url.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: '**', component: ErrorUrlComponent},
]


@NgModule({
  declarations: [
    LandingPageComponent,
    ErrorUrlComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  providers:[
    UserProductsService,
    UserSrvcService,
    FilterService
  ]
})
export class CoreModule { }
