import { Component,OnInit,OnChanges } from '@angular/core';
import { UserSrvcService } from '../services/user-srvc.service';
import { UserProductsService } from '../services/user-products.service';
import { allProductsModel } from '../models/allproducts.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit,OnChanges{
  searchCondition:boolean;
  showcart:boolean;
  drpdownValue:string='Collections';
  selected = 'option2';
  searchValue:string;
  searchedArray:allProductsModel[]=[];
  cartCount:number;

  constructor( private srvc:UserSrvcService, private prdctSrvc:UserProductsService,private filterSrvc:FilterService ) {}

  dropdownValue(drpValue:string) {
    this.drpdownValue = drpValue;
  }
  ngOnInit(): void {
    this.searchCondition = this.srvc.showSearchBox;
    this.showcart = this.srvc.showCart;
    this.filterSrvc.searchValue = this.searchValue;
    
  }
  ngOnChanges():void {
    // this.cartCount = this.filterSrvc.cartLength;
    
  }
  
  

}
