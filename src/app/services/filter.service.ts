import { Injectable, OnInit,Output,EventEmitter } from '@angular/core';
import { allProductsModel } from '../models/allproducts.model';
import { UserProductsService } from './user-products.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService implements OnInit {

  filteredProducts: allProductsModel[] = [];
  findedProductView: allProductsModel[] = [];
  relaPrdct: allProductsModel[] = [];
  cartPrdcts: allProductsModel[] = [];
  cartIconCount: number = 0;
  allBooks: allProductsModel[] = [];

  constructor(private srvc: UserProductsService) { }

  fleteringProductsAction(paramType: string) {

    let findeProducts = this.srvc.allProductsSrvc.filter((x) => {
      return x.type === paramType;
    })
    this.filteredProducts = findeProducts;
  }

  ngOnInit(): void {

  }


  viewProducts(id: number, prdctSrvctype?: string) {
    let findProduct = this.srvc.allProductsSrvc.filter((x) => {
      return x.id === id
    })
    this.findedProductView = findProduct;
    let prdctType: string = this.findedProductView[0].type;
    let relatedPrdctFind = this.srvc.allProductsSrvc.filter((x) => {
      return x.type === prdctType && x.id != id;
    })
    this.relaPrdct = relatedPrdctFind;
  }

  CartFunction(cartId?: number) {
    let cartFind = this.srvc.allProductsSrvc.find((x) => {
      return x.id === cartId;
    })
    let cartInP = this.cartPrdcts.find(x => x.id === cartId)
    if (!cartInP) {
      this.cartPrdcts.push(cartFind);
      this.cartIconCount++;
    } else {
      alert("Prodect alreadr exist");
    }



  }


}
