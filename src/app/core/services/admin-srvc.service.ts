import { Injectable, inject } from '@angular/core';
import { UserProductsService } from './user-products.service';
import { NgForm } from '@angular/forms';
import { ProductModel } from '../models/allproducts.model';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminSrvcService {
  prdctsId: number = 0;
  editForm: NgForm;
  http: HttpClient = inject(HttpClient);

  constructor(private srvc: UserProductsService, private toast: ToastrService) { }

  removeProducts(prdctId: number) {

    const productFind = this.srvc.allProductsSrvc.find((x) => {
      return x.id === prdctId;
    })
    let indexValue = this.srvc.allProductsSrvc.indexOf(productFind);
    this.srvc.allProductsSrvc.splice(indexValue, 1);

  }

  getProducts() {
    return this.http.get('http://localhost:3000/api/admin/products')
  }

  addProducts(formValues: NgForm, file: File) {
    const formImg = new FormData(document.getElementById("prdctf") as HTMLFormElement);
    formImg.append('image', file);

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data; boundary=<calculated when request is sent>')
    this.http.post('http://localhost:3000/api/admin/addproducts', formImg).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
    // this.srvc.allProductsSrvc.push(formValues.value);
  }

  editPrdct(product: ProductModel, formValue: ProductModel) {

    let index = this.srvc.allProductsSrvc.findIndex((x) => { return x.id === product.id });
    this.srvc.allProductsSrvc[index] = formValue;
    this.toast.success('Product Upadted');
  }

}
