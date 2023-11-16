import { Component } from '@angular/core';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor( private srvc: UserSrvcService ) {}

  loginFunction() {
    this.srvc.adminLogin();
    
  }

}
