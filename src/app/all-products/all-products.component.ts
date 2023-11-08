import { Component } from '@angular/core';
import { allProductsModel } from '../models/allproducts.model';
import { UserProductsService } from '../services/user-products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  allProducts: allProductsModel [] = [];
  constructor(private srvc:UserProductsService) {}

  ngOnInit(): void {
    
    this.allProducts = this.srvc.allProductsSrvc;
    console.log(this.allProducts);
    
  }

}
