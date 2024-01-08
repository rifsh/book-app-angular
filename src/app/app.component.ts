import { Component,OnInit } from '@angular/core';
import { UserSrvcService } from './core/services/user-srvc.service';
import mongoose from 'mongoose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'book-app';

  constructor() {
  }

  ngOnInit(): void {
  }

}
