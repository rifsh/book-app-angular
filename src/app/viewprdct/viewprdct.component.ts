import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter.service';
import { ProductModel } from '../models/allproducts.model';
import { UserSrvcService } from '../services/user-srvc.service';

@Component({
  selector: 'app-viewprdct',
  templateUrl: './viewprdct.component.html',
  styleUrls: ['./viewprdct.component.css']
})
export class ViewprdctComponent implements OnInit {
  productsView: ProductModel[] = [];
  relatedProduct: ProductModel[] = [];
  type: string;
  cartIncerment: number = 0;


  constructor(private activateRoute: ActivatedRoute, private srvc: FilterService, private srvcUser: UserSrvcService) { }

  ngOnInit(): void {
    let routeparam = this.activateRoute.snapshot.paramMap.get("id");
    this.srvc.viewProducts(parseInt(routeparam));
    this.productsView = this.srvc.findedProductView;
    this.relatedProduct = this.srvc.relaPrdct;
    this.srvcUser.showSearchBox = false;
  }
  
  addToCart(prdctid: number) {
    this.srvc.CartFunction(prdctid);
  }

}
