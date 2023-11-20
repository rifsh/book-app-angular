import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { AdminSrvcService } from 'src/app/core/services/admin-srvc.service';
import { UserProductsService } from 'src/app/core/services/user-products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  allProdutcs: ProductModel [] = [];
  constructor(private srvc: UserProductsService, private adminSrvc: AdminSrvcService, private route: Router) {
    this.allProdutcs = srvc.allProductsSrvc;
  }

  removeProducts(id:number) {
    this.adminSrvc.removeProducts(id)
  }

  // editProduct() {
  // }

}
