import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { UserSrvcService } from '../services/user-srvc.service';
import { UserProductsService } from '../services/user-products.service';
import { allProductsModel } from '../models/allproducts.model';
import { FilterService } from '../services/filter.service';
import { Router } from '@angular/router';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnChanges {
  searchCondition: boolean;
  showcart: boolean;
  logLinkShow: boolean;
  logoutLinkShow: boolean;
  drpdownValue: string = 'Collections';
  selected = 'option2';
  searchValue: string;
  searchedArray: allProductsModel[] = [];
  cartCount: number;
  usrname:string;


  constructor(private srvc: UserSrvcService,
    private prdctSrvc: UserProductsService,
    private filterSrvc: FilterService,
    private usrSrvc: UserSrvcService,
    private route: Router
  ) {

  }

  @Output() 
  searchText:EventEmitter<string> = new EventEmitter<string>;




  dropdownValue(drpValue: string) {
    this.drpdownValue = drpValue;
  }
  ngOnInit(): void {
    this.searchCondition = this.srvc.showSearchBox;
    this.showcart = this.srvc.showCart;
    this.cartCount = this.filterSrvc.cartIconCount;
    this.logLinkShow = !this.srvc.isLogged;
    this.logoutLinkShow = this.srvc.isLogged;
    this.usrname = this.srvc.usrname;
  }
  ngOnChanges(): void {

  }

  searchOperation() {
    this.searchText.emit(this.searchValue);
  }

  logOut() {
    this.srvc.isLogged = false;
    this.route.navigate(['login']);
  }





}
