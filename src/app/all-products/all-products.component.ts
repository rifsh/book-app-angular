import { Component,OnInit } from '@angular/core';
import { allProductsModel } from '../models/allproducts.model';
import { UserProductsService } from '../services/user-products.service';
import { UserSrvcService } from '../services/user-srvc.service';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  allProducts: allProductsModel [] = [];
  searchValue:string;
  constructor(private srvc:UserProductsService, private usrsrvc:UserSrvcService, private activateRoute:ActivatedRoute,private filterSrvc:FilterService) {
  // console.log(this.filterSrvc.searchValue);

  }


  ngOnInit(): void {
    this.usrsrvc.showSearchBox = true;
    this.usrsrvc.showCart = true;
    this.allProducts = this.srvc.allProductsSrvc;
  }

}
