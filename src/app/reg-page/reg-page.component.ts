import { Component,ViewChild,inject,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserSrvcService } from '../services/user-srvc.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {
  
hide:boolean=true;
srvc:UserSrvcService = inject(UserSrvcService);
route:Router = inject(Router);

@ViewChild('regForm') regForm:NgForm;


constructor(private router: Router) { }

ngOnInit(): void {
  
}


onFormSubmitted() {
  const formvalue = this.regForm.value
  this.srvc.user.push(formvalue);
  this.srvc.signUp()
  this.regForm.reset({
    email: null,
    username: null,
    password: null
  })
}

}
