import { Injectable, inject } from '@angular/core';
import { LoginValueModel } from '../models/user-reg-model';
import { Router, RouterLink } from '@angular/router';
import { logindetail } from '../models/login-model';
import { AdminLoginData, adminLoginRes, adminlogin } from '../models/admin-login-model';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSrvcService {

  http: HttpClient = inject(HttpClient);

  showSearchBox: boolean = true;
  showCart: boolean = false;
  isLogged: boolean = false;
  usrname: string;
  adminName: string;


  adminLoginValues: AdminLoginData[] = [{
    adminUsername: 'rifash', adminPassword: '1122'
  }];

  constructor(private router: Router, private toast: ToastrService) {
    const localdata = localStorage.getItem('signUpUsers');
    if (localdata != null) {
      this.user = JSON.parse(localdata);
    }
    localStorage.setItem('adminLoginValues', JSON.stringify(this.adminLoginValues));

  }

  logindatas: object[] = [];
  user: LoginValueModel[] = [];
  userlogin: logindetail[] = [];
  adminLoginValue: AdminLoginData[] = [];

  signUp() {
    localStorage.setItem('signUpUsers', JSON.stringify(this.user))
    this.router.navigate(['login']);
  }

  emptyStorage() {
    localStorage.removeItem('signUpUsers');
  }

  login(usrName: string, password: string, loginarr: logindetail) {
    let findedUser = this.user.filter((x) => {
      return x.regName === usrName && x.regPassword === password
    })

    if (findedUser.length === 0 || loginarr.password === '' && loginarr.userName === '') {
      this.showCart = false;
      this.toast.error('Not Authorized')
    } else {
      this.toast.success("Log in Success");
      this.usrname = usrName;
      this.showCart = true;
      this.router.navigate(['all-products']);
      this.isLogged = true;
    }
  }

  allUsers() {
    return this.http.get('http://localhost:3000/api/admin/users')
  }

  adminLogin(adminName: string, adminPassword: string) {
    let token: string;
    let values: adminlogin = {
      username: adminName,
      password: adminPassword
    }
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    })
    this.http.post('http://localhost:3000/api/admin/login', values).subscribe((res: adminLoginRes) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.toast.success('Admin Accessed')
        this.router.navigate(['admin-dashboard']);
        console.log(res.message);
      } else {
      }
    }, (err) => {
      this.toast.error('You are not the real one')
    })

    const adminLoginContents = localStorage.getItem('adminLoginValues');
    // if (adminLoginContents != null) {
    //   this.adminLoginValue = JSON.parse(adminLoginContents);
    // }

    // const adminFind = this.adminLoginValue.filter((x) => { return x.adminUsername === adminName && x.adminPassword === adminPassword })
    // // console.log(adminName);

    // if (adminFind.length === 0 || adminName === '' || adminName === '') {
    //   this.toast.error('You are not the real one')
    //   this.router.navigate(['admin-login']);
    // } else {
    //   this.adminName = adminFind[0].adminUsername;
    //   this.toast.success('Admin Accessed')
    // }


  }

}
