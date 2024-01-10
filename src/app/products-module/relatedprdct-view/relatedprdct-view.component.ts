import { Component, OnInit } from '@angular/core';
import { ProductModel, ResponseProduct, ResponseProductView } from '../../core/models/allproducts.model';
import { ActivatedRoute } from '@angular/router';
import { UserSrvcService } from '../../core/services/user-srvc.service';
import { FilterService } from 'src/app/core/services/filter.service';
import { UserProductsService } from 'src/app/core/services/user-products.service';

@Component({
  selector: 'app-relatedprdct-view',
  templateUrl: './relatedprdct-view.component.html',
  styleUrls: ['./relatedprdct-view.component.css']
})
export class RelatedprdctViewComponent implements OnInit{
  productsView:ResponseProductView[]=[];
  relatedProduct:ResponseProductView []=[];
  type:string;
  cartIncrement:number = 0;

  constructor( private activateRoute:ActivatedRoute,private srvc:UserProductsService,private srvcUser:UserSrvcService ) {
  }

  ngOnInit(): void {
    let routeparam = this.activateRoute.snapshot.paramMap.get("id");
    let routeParam: string = this.activateRoute.snapshot.paramMap.get("id");
    let categoryParam: string = this.activateRoute.snapshot.paramMap.get("category");
    this.srvc.viewProducts(routeParam).subscribe((resm: ResponseProduct) => {
      this.productsView.push(resm.datas);
      this.srvc.fleteringProductsAction(categoryParam).subscribe((res: ResponseProduct) => {
        this.relatedProduct = res.datas;
        this.relatedProduct = this.relatedProduct.filter((x) => { return x._id != resm.id });
      })
    })
    this.srvcUser.showSearchBox = false;
  }

  addToCart(prdctid:string) {
  //   this.srvc.CartFunction(prdctid);
  //   this.cartIncrement = this.srvc.cartIconCount;
  }
}
