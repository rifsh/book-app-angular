import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { AdminSrvcService } from 'src/app/core/services/admin-srvc.service';
import { UserProductsService } from 'src/app/core/services/user-products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  pushProducts:ProductModel [] = [];
  @ViewChild('prdctForm') formValues:NgForm; 

  constructor(private srvc:AdminSrvcService) {
    
  }
  
  submit() {
    this.srvc.addProducts(this.formValues)
    this.formValues.reset()
  }
}
