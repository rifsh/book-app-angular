import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { FilterService } from 'src/app/core/services/filter.service';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  productsView: ProductModel[] = [];
  relatedProduct: ProductModel[] = [];
  type: string;
  cartIncerment: number = 0;


  constructor(private activateRoute: ActivatedRoute, private srvc: FilterService, private srvcUser: UserSrvcService ) { }

  ngOnInit(): void {
    let routeparam = this.activateRoute.snapshot.paramMap.get("id");
    this.srvc.viewProducts(parseInt(routeparam));
    this.productsView = this.srvc.findedProductView;
    this.relatedProduct = this.srvc.relaPrdct;
    this.srvcUser.showSearchBox = false;
    this.cartIncerment = this.srvc.cartIconCount;
  }
  
  addToCart(prdctid: number) {
    this.srvc.CartFunction(prdctid);
    this.cartIncerment = this.srvc.cartIconCount
  }
}
