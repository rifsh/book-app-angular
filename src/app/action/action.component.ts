import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProductsService } from '../services/user-products.service';
import { FilterService } from '../services/filter.service';
import { ProductModel } from '../models/allproducts.model';
import { UserSrvcService } from '../services/user-srvc.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit{

  actionaBooks:ProductModel [] = [];

  constructor(private activateRoute:ActivatedRoute, private srvc:UserSrvcService, private filterSrvc:FilterService ) {}
  
ngOnInit(): void {
  let routeparam = this.activateRoute.snapshot.paramMap.get("type");
  this.filterSrvc.fleteringProductsAction(routeparam);
  this.actionaBooks = this.filterSrvc.filteredProducts;
  this.srvc.showSearchBox = false;

}
}
