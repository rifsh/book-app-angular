import { Injectable } from '@angular/core';
import { UserProductsService } from './user-products.service';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminSrvcService {
  prdctsId:number = 0;
  editForm: NgForm;

  constructor(private srvc:UserProductsService) { }

  removeProducts(prdctId:number) {
    
    const productFind = this.srvc.allProductsSrvc.find((x)=>{
      return x.id === prdctId;
    })
    let indexValue = this.srvc.allProductsSrvc.indexOf(productFind);
    this.srvc.allProductsSrvc.splice(indexValue,1);
    
  }

  addProducts(formValues: NgForm) {
    this.srvc.allProductsSrvc.push(formValues.value);
  }

  editPrdct(id?:number) {
    // setTimeout(() => {
    //   console.log(this.editForm);
      
    // }, 3000);
  }

}
