import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatModule } from './mat-module/mat/mat.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatModule,
    CoreModule,
    AdminModule,
    ToastrModule.forRoot(
      {
        timeOut:2000,
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
