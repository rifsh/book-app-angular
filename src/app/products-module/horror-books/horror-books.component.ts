import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { FilterService } from 'src/app/core/services/filter.service';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-horror-books',
  templateUrl: './horror-books.component.html',
  styleUrls: ['./horror-books.component.css']
})
export class HorrorBooksComponent {
  horrorBooks:ProductModel[]=[];

  constructor(private activateRoute:ActivatedRoute, private filterSrvc:FilterService, private srvc:UserSrvcService ) {}


  ngOnInit(): void {
  let routeparam = this.activateRoute.snapshot.paramMap.get("type");
  this.srvc.showSearchBox = false;
  this.filterSrvc.fleteringProductsAction(routeparam);
  this.horrorBooks = this.filterSrvc.filteredProducts;
  
  }
}
