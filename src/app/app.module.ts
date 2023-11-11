import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { UserSrvcService } from './services/user-srvc.service';
import { CollectionsComponent } from './collections/collections.component';
import { FooterComponent } from './footer/footer.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ErrorUrlComponent } from './error-url/error-url.component';
import { ActionComponent } from './action/action.component';
import { SciFiComponent } from './sci-fi/sci-fi.component';
import { FilterService } from './services/filter.service';
import { HistoryComponent } from './history/history.component';
import { HorrorComponent } from './horror/horror.component';
import { SearchPipe } from './pipe/search.pipe';
import { ViewprdctComponent } from './viewprdct/viewprdct.component';
import { RelatedprdctViewComponent } from './relatedprdct-view/relatedprdct-view.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    RegPageComponent,
    NavBarComponent,
    CollectionsComponent,
    FooterComponent,
    AllProductsComponent,
    ErrorUrlComponent,
    ActionComponent,
    SciFiComponent,
    HistoryComponent,
    HorrorComponent,
    SearchPipe,
    ViewprdctComponent,
    RelatedprdctViewComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule
  ],
  providers: [UserSrvcService,FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
