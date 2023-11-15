import { Component,inject,ViewChild } from '@angular/core';
import { UserSrvcService } from '../core/services/user-srvc.service';
import { NgForm } from '@angular/forms';
import { logindetails } from '../core/models/login-model';

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
    
    let usrName:string = this.logForm.value.userName;
    let usrPassword:string = this.logForm.value.password;
    this.srvc.login(usrName,usrPassword,this.logForm.value);
    this.logForm.reset()
}
}
