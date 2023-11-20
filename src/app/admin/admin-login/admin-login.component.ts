import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor( private srvc: UserSrvcService,private route:Router ) {}
  @ViewChild('adminLoginForm') loginForm: NgForm;


  loginFunction() {
    this.srvc.adminLogin(this.loginForm.value.userName,this.loginForm.value.password);
  }

}
