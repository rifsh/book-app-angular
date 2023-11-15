import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { FilterService } from 'src/app/core/services/filter.service';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-action-books',
  templateUrl: './action-books.component.html',
  styleUrls: ['./action-books.component.css']
})
export class ActionBooksComponent {
  actionaBooks: ProductModel[] = [];

  constructor(private activateRoute: ActivatedRoute, private srvc: UserSrvcService, private filterSrvc: FilterService) { }

  ngOnInit(): void {
    let routeparam = this.activateRoute.snapshot.paramMap.get("type");
    this.filterSrvc.fleteringProductsAction(routeparam);
    this.actionaBooks = this.filterSrvc.filteredProducts;
    this.srvc.showSearchBox = false;

  }
}
