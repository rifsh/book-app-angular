import { Injectable } from '@angular/core';
import { UserProductsService } from './user-products.service';
import { NgForm } from '@angular/forms';
import { ProductModel } from '../models/allproducts.model';
import { AllProdutsComponent } from 'src/app/products-module/all-produts/all-produts.component';

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
    console.log(this.srvc.allProductsSrvc);
    
  }

  editPrdct(product:ProductModel,formValue:ProductModel) {
    
    let index = this.srvc.allProductsSrvc.findIndex((x)=>{return x.id === product.id});
    this.srvc.allProductsSrvc[index] = formValue;
    
    
    
  }

}
