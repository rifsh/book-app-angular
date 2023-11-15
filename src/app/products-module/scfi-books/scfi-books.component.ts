import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { FilterService } from 'src/app/core/services/filter.service';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-scfi-books',
  templateUrl: './scfi-books.component.html',
  styleUrls: ['./scfi-books.component.css']
})
export class ScfiBooksComponent {
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
