import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/allproducts.model';
import { UserProductsService } from '../services/user-products.service';
import { UserSrvcService } from '../services/user-srvc.service';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  prdctCondition:boolean = true;
  allProducts: ProductModel[] = [];
  searchValue: string = '';
  searchedArray: ProductModel[] = []
  constructor(private srvc: UserProductsService, private usrsrvc: UserSrvcService, private activateRoute: ActivatedRoute, private filterSrvc: FilterService) {

  }


  ngOnInit(): void {
    this.usrsrvc.showSearchBox = true;
    if (this.usrsrvc.isLogged) {
      this.usrsrvc.showCart = true;
    }
    this.allProducts = this.srvc.allProductsSrvc;
    
  }

  changeSearch(searchContent: string) {
    
    this.searchValue = searchContent;
    
    this.searchedArray = this.allProducts.filter((x)=>{return x.title.toLowerCase().includes(this.searchValue.toLowerCase())});
    
    if (this.searchValue.length === 0) {
      this.prdctCondition = true;
    }else {
      this.prdctCondition = false;
    }

    
  }
  

}


