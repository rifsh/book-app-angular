import { Injectable } from '@angular/core';
import { loginValuesModel } from '../models/user-reg-model';
import { Router } from '@angular/router';
import { logindetails } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class UserSrvcService {

  constructor( private route:Router ) {
    let localValues = localStorage.getItem('reg-storage');
    if (localStorage!=null) {      
    this.allValues = JSON.parse(localValues);
    }
  }
  
  registrationUpdate: loginValuesModel[]=[];

  loginValues:logindetails[]=[]

  allValues:loginValuesModel[]=[
    
  ];

  registering(usrName:string) {
    localStorage.setItem('reg-storage',JSON.stringify(this.registrationUpdate));
    const SameUsrname = this.allValues.find((x)=>{return x.regName === usrName});    
  }

ngOnInit(): void {
  
    
}

  logIn() {
    let logName:string = this.loginValues[0].userName; 
    let logPass:string = this.loginValues[0].password; 

    
    
    const logCondition = this.allValues.find((x)=>{return x.regName === logName && x.regPassword === logPass});
    console.log(logCondition);
    
    if (logCondition != undefined) {
      alert('you are logged in successfully');
      this.route.navigate([''])
    }else {
      alert('Go away');
    }
  }
  
}
