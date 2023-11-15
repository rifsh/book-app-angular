import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { FilterService } from 'src/app/core/services/filter.service';
import { UserProductsService } from 'src/app/core/services/user-products.service';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-all-produts',
  templateUrl: './all-produts.component.html',
  styleUrls: ['./all-produts.component.css']
})
export class AllProdutsComponent {
  prdctCondition: boolean = true;
  allProducts: ProductModel[] = [];
  searchValue: string = '';
  searchedArray: ProductModel[] = [];
  cartIincrement:number;
  constructor(private srvc: UserProductsService, private usrsrvc: UserSrvcService, private activateRoute: ActivatedRoute, private filterSrvc: FilterService) {

  }


  ngOnInit(): void {
    this.usrsrvc.showSearchBox = true;
    if (this.usrsrvc.isLogged) {
      this.usrsrvc.showCart = true;
    }
    this.allProducts = this.srvc.allProductsSrvc;
    this.cartIincrement = this.filterSrvc.cartIconCount;
  }

  changeSearch(searchContent: string) {

    this.searchValue = searchContent;

    this.searchedArray = this.allProducts.filter((x) => { return x.title.toLowerCase().includes(this.searchValue.toLowerCase()) });

    if (this.searchValue.length === 0) {
      this.prdctCondition = true;
    } else {
      this.prdctCondition = false;
    }


  }
}
