import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter.service';
import { allProductsModel } from '../models/allproducts.model';
import { UserSrvcService } from '../services/user-srvc.service';

@Component({
  selector: 'app-viewprdct',
  templateUrl: './viewprdct.component.html',
  styleUrls: ['./viewprdct.component.css']
})
export class ViewprdctComponent implements OnInit{
  productsView:allProductsModel[]=[];
  relatedProduct:allProductsModel []=[];
  type:string;
  cartIncerment:number = 0;


  constructor( private activateRoute:ActivatedRoute,private srvc:FilterService,private srvcUser:UserSrvcService ) {}

  ngOnInit(): void {
    let routeparam = this.activateRoute.snapshot.paramMap.get("id");
    // console.log(routeparam);
    
    
    this.srvc.viewProducts(parseInt(routeparam));
    this.productsView = this.srvc.findedProductView;
    this.relatedProduct = this.srvc.relaPrdct;
    
    this.type = this.relatedProduct[0].type;
    this.srvcUser.showSearchBox = false;
  }
  

  addToCart(prdctid:number) {
    this.srvc.CartFunction(prdctid);
    // this.srvc.cartLength = this.cartIncerment++;
    // alert("Added to cart");
    
  }

}
