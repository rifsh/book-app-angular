import { Component, OnInit } from '@angular/core';
import { allProductsModel } from '../models/allproducts.model';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent implements OnInit{

  horrorBooks:allProductsModel[]=[];

  constructor(private activateRoute:ActivatedRoute, private filterSrvc:FilterService ) {}


  ngOnInit(): void {

    let routeparam = this.activateRoute.snapshot.paramMap.get("type");
  //   console.log(routeparam);
    
  //   let findedArray = this.srvc.allProductsSrvc.filter((x)=>{return x.type === routeparam})
  //   this.actionaBooks = findedArray;

  this.filterSrvc.fleteringProductsAction(routeparam);
  this.horrorBooks = this.filterSrvc.filteredProducts;
    
  }

}
