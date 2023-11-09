import { Injectable } from '@angular/core';
import { allProductsModel } from '../models/allproducts.model';
import { UserProductsService } from './user-products.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filteredProducts: allProductsModel[] = [];
  findedProductView: allProductsModel[] = [];
  relaPrdct: allProductsModel[] = [];
  searchValue:string;
  cartPrdcts:allProductsModel[]=[];

  constructor(private srvc: UserProductsService) { }

  fleteringProductsAction(paramType: string) {

    let findeProducts = this.srvc.allProductsSrvc.filter((x) => {
      return x.type === paramType;
    })
    this.filteredProducts = findeProducts;
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

  CartFunction (cartId:number) {
    let cartFind = this.srvc.allProductsSrvc.find((x)=>{
      return x.id === cartId;
    })
    let cartInP=this.cartPrdcts.find(x=>x.id===cartId)
    if (!cartInP) {
      this.cartPrdcts.push(cartFind);
    }else {
      alert("Prodect alreadr exist");
    }
    

    // console.log(this.cartPrdcts);
    
    
  }

}
