import { Component } from '@angular/core';
import { logindetail } from 'src/app/core/models/login-model';
import { loginValueModel } from 'src/app/core/models/user-reg-model';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {

  users: loginValueModel[] = [];

  constructor(private srvc:UserSrvcService) {
    this.users = srvc.user;
  }

}
