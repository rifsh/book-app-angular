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

@ViewChild('regForm') regForm:NgForm

ngOnInit(): void {
  
}

onSubmitreg() {
  let formValues = this.regForm.value;
  this.srvc.registrationUpdate.push(formValues);
  this.route.navigateByUrl('login');
  this.srvc.registering(this.regForm.value.regName)
}
}
