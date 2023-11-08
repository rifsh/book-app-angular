import { Component,OnInit } from '@angular/core';
import { UserProductsService } from '../services/user-products.service';
import { allProductsModel } from '../models/allproducts.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit
{
  
  ngOnInit(): void {
    
  }

}
