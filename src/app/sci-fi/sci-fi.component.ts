import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../services/filter.service';
import { ProductModel } from '../models/allproducts.model';
import { UserSrvcService } from '../services/user-srvc.service';

@Component({
  selector: 'app-sci-fi',
  templateUrl: './sci-fi.component.html',
  styleUrls: ['./sci-fi.component.css']
})
export class SciFiComponent implements OnInit{

  type:string;
  scifiBooks:ProductModel[] =[];

  constructor(private activateRoute:ActivatedRoute,private filterSrvc:FilterService,private srvc:UserSrvcService) {}

  ngOnInit(): void {
  let routeparam = this.activateRoute.snapshot.paramMap.get("type");
  this.srvc.showSearchBox = false;
  this.filterSrvc.fleteringProductsAction(routeparam);
  this.scifiBooks = this.filterSrvc.filteredProducts;
  this.type = this.scifiBooks[0].type
  }

}
