import { Injectable } from '@angular/core';
import { loginValuesModel } from '../models/user-reg-model';
import { Router } from '@angular/router';
import { logindetails } from '../models/login-model';
import { AdminLoginData } from '../models/admin-login-model';

@Injectable({
  providedIn: 'root'
})
export class UserSrvcService {

  showSearchBox:boolean=true;
  showCart:boolean=false;
  isLogged:boolean = false;
  usrname:string;
  adminLoginValues: AdminLoginData[] = [{
    adminUsername: 'soman',adminPassword:'soman123'
  }];

  constructor(private router: Router) {
    const localdata = localStorage.getItem('signUpUsers');
    if (localdata != null) {
      this.user = JSON.parse(localdata);
    }
    localStorage.setItem('adminLoginValues', JSON.stringify(this.adminLoginValues));
  }
  
  logindatas: object[] = [];
  user: loginValuesModel[] = [];
  userlogin: logindetails[] = [];
  adminLoginValue: AdminLoginData [] = [];

  signUp() {
    localStorage.setItem('signUpUsers', JSON.stringify(this.user))
    this.router.navigate(['login']);
  }

  login(usrName:string,password:string, loginarr:logindetails) {
    let findedUser = this.user.filter((x)=>{
      return x.regName === usrName && x.regPassword === password
    })
    
    if (findedUser.length === 0  || loginarr.password ==='' && loginarr.userName === '') {
      this.showCart = false;
      alert("You are not authorized")
    }else {
      alert('you are authorized');
      this.usrname = usrName;
      this.showCart = true;
      this.router.navigate(['all-products']);
      this.isLogged = true;
    }  
  }

  adminLogin() {
    const adminLoginContents = localStorage.getItem('adminLoginValues');
    if (adminLoginContents != null) {
      this.adminLoginValue  = JSON.parse(adminLoginContents);
    }
    // if () {
      
    // }
    
    
  }
  
}