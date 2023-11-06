import { Component,inject,ViewChild } from '@angular/core';
import { UserSrvcService } from '../services/user-srvc.service';
import { NgForm } from '@angular/forms';
import { logindetails } from '../models/user-reg-model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginarr:logindetails[]=[]

  srvc:UserSrvcService = inject(UserSrvcService);

  @ViewChild('logForm') logForm:NgForm

  onLogin() {
    let loginValues = this.logForm.value;
    this.srvc.loginValues.push(loginValues)
     
    this.srvc.logIn();
    
    
    
    
}
}
