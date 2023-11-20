import { Component,OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/core/models/allproducts.model';
import { AdminSrvcService } from 'src/app/core/services/admin-srvc.service';
import { UserProductsService } from 'src/app/core/services/user-products.service';

@Component({
  selector: 'app-edit-prdct',
  templateUrl: './edit-prdct.component.html',
  styleUrls: ['./edit-prdct.component.css']
})
export class EditPrdctComponent implements OnInit{

  @ViewChild('editprdctForm') editForm:NgForm;

  prdcts: ProductModel;

  constructor(private srvc:AdminSrvcService, private routerValue: ActivatedRoute,private prdctSrvc: UserProductsService) {
    
    
  }

  ngOnInit(): void {
    let prdctId = this.routerValue.snapshot.paramMap.get('id');
    let product = this.prdctSrvc.allProductsSrvc.find((x)=>{
      return  x.id === Number(prdctId)
    })
    this.prdcts = product;
    this.srvc.editForm = this.editForm;
    
    setTimeout(() => {
      this.editForm.setValue ({
        id: product.id,
        title: product.title,
        author: product.author,
        image: product.image,
        dessc: product.dessc,
        type: product.type,
        price: product.price
      })
    }, 500);
  }
  
  editPrdct() {
    
    this.srvc.editPrdct(this.prdcts,this.editForm.value );
    
  }
}
