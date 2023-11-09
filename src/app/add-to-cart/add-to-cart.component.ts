import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { allProductsModel } from '../models/allproducts.model';
import { UserSrvcService } from '../services/user-srvc.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  priceFind: number;
  products: allProductsModel[] = [];
  mainProducts: allProductsModel[] = [];
  totalPrice: number;
  totalQuanndity: number;


  constructor(private filterSrvc: FilterService, private usrSrvc: UserSrvcService) { }

  ngOnInit(): void {
    this.products = this.filterSrvc.cartPrdcts;
    this.usrSrvc.showSearchBox = false;
    // this.usrSrvc.showCart = false;
    this.quandity();

  }

  quandity() {
    this.totalPrice = 0;
    this.totalQuanndity = 0;
    for (const i of this.products) {
      this.totalPrice += i.quandity * i.price;
      this.totalQuanndity += i.quandity;
    }
  }

  deletePrdctCart(prdcts) {
    let index = this.products.indexOf(prdcts);
    this.products.splice(index, 1);
    
    
  }

}
