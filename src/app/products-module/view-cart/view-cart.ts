import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductModel, ResponseProduct, ResponseProductView } from 'src/app/core/models/allproducts.model';
import { CartResponseModel } from 'src/app/core/models/response-model';
import { UserProductsService } from 'src/app/core/services/user-products.service';
import { UserSrvcService } from 'src/app/core/services/user-srvc.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './view-cart.html',
  styleUrls: ['./view-cart.css']
})
export class AddToCartComponent {
  priceFind: number;
  products: ResponseProductView[] = [];
  mainProducts: ProductModel[] = [];
  totalPrice: number;
  totalQuanndity: number;
  userid: string = localStorage.getItem('userId');

  toast: ToastrService = inject(ToastrService);



  constructor(private productSrvc: UserProductsService, private usrSrvc: UserSrvcService, private prdctsSrvc: UserProductsService) { }

  ngOnInit(): void {
    this.usrSrvc.showSearchBox = false;
    this.usrSrvc.showCart = false;
    this.productSrvc.fetchCartProducts().subscribe((res: ResponseProduct) => {
      this.products = res.datas;
      this.totalQuanndity = res.totalProducts;
    }, (err) => {
      console.log(err.message);
    });
    this.quandity();
  }

  quandity() {
    // this.totalPrice = 0;
    // this.totalQuanndity = 0;
    // for (const i of this.products) {
    //   this.totalPrice += i.quandity * i.price;
    //   this.totalQuanndity += i.quandity;
    // }
  }

  deletePrdctCart(prdcts: string) {
      this.prdctsSrvc.deleteCartProducts(prdcts, this.userid).subscribe((res: CartResponseModel)=>{
        this.toast.info(res.message);
        this.productSrvc.fetchCartProducts().subscribe((res: ResponseProduct) => {
          this.products = res.datas;
          this.totalQuanndity = res.totalProducts;
        });
      })
  }

}
