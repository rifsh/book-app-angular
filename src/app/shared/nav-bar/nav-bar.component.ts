import { Component, EventEmitter,Output,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { FilterService } from 'src/app/core/services/filter.service';
import { UserProductsService } from 'src/app/core/services/user-products.service';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  searchCondition: boolean;
  showcart: boolean;
  logLinkShow: boolean;
  logoutLinkShow: boolean;
  drpdownValue: string = 'Collections';
  searchValue: string;
  searchedArray: ProductModel[] = [];
  cartCount: number;
  usrname:string;


  constructor(private srvc: UserSrvcService,
    private filterSrvc: FilterService,
    private route: Router
  ) {

  }

  @Output() 
  searchText:EventEmitter<string> = new EventEmitter<string>;
  @Input() cartIconCount:number;




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
