import { Component } from '@angular/core';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { FilterService } from 'src/app/core/services/filter.service';
import { UserProductsService } from 'src/app/core/services/user-products.service';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  priceFind: number;
  products: ProductModel[] = [];
  mainProducts: ProductModel[] = [];
  totalPrice: number;
  totalQuanndity: number;


  constructor(private filterSrvc: FilterService, private usrSrvc: UserSrvcService, private prdctsSrvc:UserProductsService) { }

  ngOnInit(): void {
    this.products = this.filterSrvc.cartPrdcts;
    // this.products = this.prdctsSrvc.allProductsSrvc.filter((x)=>{return x.id === 7 })
    this.usrSrvc.showSearchBox = false;
    this.usrSrvc.showCart = false;
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
    this.quandity();
  }

}
