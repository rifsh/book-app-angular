import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent {
hide:boolean=true;

@ViewChild('regForm') regForm:NgForm

onSubmitreg() {

}
}
