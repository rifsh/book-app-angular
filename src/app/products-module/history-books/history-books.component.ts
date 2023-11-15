import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { FilterService } from 'src/app/core/services/filter.service';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-history-books',
  templateUrl: './history-books.component.html',
  styleUrls: ['./history-books.component.css']
})
export class HistoryBooksComponent {
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
