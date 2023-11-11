import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CollectionsComponent } from './collections/collections.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ErrorUrlComponent } from './error-url/error-url.component';
import { ActionComponent } from './action/action.component';
import { SciFiComponent } from './sci-fi/sci-fi.component';
import { HistoryComponent } from './history/history.component';
import { HorrorComponent } from './horror/horror.component';
import { ViewprdctComponent } from './viewprdct/viewprdct.component';
import { RelatedprdctViewComponent } from './relatedprdct-view/relatedprdct-view.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { sighnUpGuard } from './guards/sighn-up.guard';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'sign-up', component:RegPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'all-products', component:AllProductsComponent},
  {path:'action/:type', component:ActionComponent},
  {path:'sci-fi/:type', component:SciFiComponent},
  {path:'history/:type', component:HistoryComponent},
  {path:'horror/:type', component:HorrorComponent},
  {path:'horror/:type', component:HorrorComponent},
  {path:'viewproduct/:id', component:ViewprdctComponent, canActivate:[sighnUpGuard]},
  {path:'viewrelatedprdct/:id', component:RelatedprdctViewComponent},
  {path:'add-to-cart', component:AddToCartComponent},
  // {path:'collection/:type', component:CollectionsComponent},
  {path:'**', component:ErrorUrlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

