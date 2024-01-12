import { Component, HostListener, OnInit } from '@angular/core';
import { UserSrvcService } from './core/services/user-srvc.service';
import mongoose from 'mongoose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'book-app';

  constructor(private srvc: UserSrvcService) {
    const token: string = localStorage.getItem('userToken');
    const usrName: string = localStorage.getItem('username');

    if (token) {
      srvc.usrname = usrName;
      srvc.isLogged = true;
    } else {
      srvc.isLogged = false;
    }
  }

  ngOnInit(): void {
  }

  // @HostListener('window:beforeunload', ['$event'])
  // beforeUnloadHander(event: BeforeUnloadEvent) {
  //   localStorage.clear();
  // }



}
