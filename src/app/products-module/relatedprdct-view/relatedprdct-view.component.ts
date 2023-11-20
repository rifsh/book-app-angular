import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../core/models/allproducts.model';
import { ActivatedRoute } from '@angular/router';
import { UserSrvcService } from '../../core/services/user-srvc.service';
import { FilterService } from 'src/app/core/services/filter.service';

@Component({
  selector: 'app-relatedprdct-view',
  templateUrl: './relatedprdct-view.component.html',
  styleUrls: ['./relatedprdct-view.component.css']
})
export class RelatedprdctViewComponent implements OnInit{
  productsView:ProductModel[]=[];
  relatedProduct:ProductModel []=[];
  type:string;
  cartIncrement:number = this.srvc.cartIconCount;

  constructor( private activateRoute:ActivatedRoute,private srvc:FilterService,private srvcUser:UserSrvcService ) {}

  ngOnInit(): void {
    let routeparam = this.activateRoute.snapshot.paramMap.get("id");
    this.srvc.viewProducts(parseInt(routeparam));
    this.productsView = this.srvc.findedProductView;
    this.relatedProduct = this.srvc.relaPrdct;
    this.type = this.relatedProduct[0].type;
    this.srvcUser.showSearchBox = false;
    this.srvcUser.showCart = true;
  }

  addToCart(prdctid:number) {
    this.srvc.CartFunction(prdctid);
    this.cartIncrement = this.srvc.cartIconCount;
  }
}
