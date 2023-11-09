import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter.service';
import { allProductsModel } from '../models/allproducts.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  selected = 'option2';
  historyBooks:allProductsModel[]=[]

  constructor(private activateRoute:ActivatedRoute, private filterSrvc:FilterService ) {}

ngOnInit(): void {
  let routeparam = this.activateRoute.snapshot.paramMap.get("type");
  //   console.log(routeparam);
    
  //   let findedArray = this.srvc.allProductsSrvc.filter((x)=>{return x.type === routeparam})
  //   this.actionaBooks = findedArray;

  this.filterSrvc.fleteringProductsAction(routeparam);
  this.historyBooks = this.filterSrvc.filteredProducts;
}

languageFilter() {
  console.log('suiii');
  
}
  
}
