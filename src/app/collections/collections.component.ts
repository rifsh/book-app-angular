import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allProductsModel } from '../models/allproducts.model';
import { UserProductsService } from '../services/user-products.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit
{

  filteredArray : allProductsModel [] = [];

  constructor(private activateRoute: ActivatedRoute, private srvc:UserProductsService) {}
  
  ngOnInit(): void {
    
  }

}
