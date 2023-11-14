import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter.service';
import { ProductModel } from '../models/allproducts.model';
import { UserSrvcService } from '../services/user-srvc.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  selected = 'option2';
  historyBooks:ProductModel[]=[];
  

  constructor(private activateRoute:ActivatedRoute, private filterSrvc:FilterService,private srvc: UserSrvcService ) {}

ngOnInit(): void {
  this.srvc.showSearchBox = false;
  let routeparam = this.activateRoute.snapshot.paramMap.get("type");
  this.filterSrvc.fleteringProductsAction(routeparam);
  this.historyBooks = this.filterSrvc.filteredProducts;
  
}

languageFilter() {
  console.log('suiii');
  
}
  
}
