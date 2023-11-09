import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProductsService } from '../services/user-products.service';
import { FilterService } from '../services/filter.service';
import { allProductsModel } from '../models/allproducts.model';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit{

  actionaBooks:allProductsModel [] = [];

  constructor(private activateRoute:ActivatedRoute, private srvc:UserProductsService, private filterSrvc:FilterService ) {}
  
ngOnInit(): void {
  let routeparam = this.activateRoute.snapshot.paramMap.get("type");
  //   console.log(routeparam);
    
  //   let findedArray = this.srvc.allProductsSrvc.filter((x)=>{return x.type === routeparam})
  //   this.actionaBooks = findedArray;

  this.filterSrvc.fleteringProductsAction(routeparam);
  this.actionaBooks = this.filterSrvc.filteredProducts;

}
}
