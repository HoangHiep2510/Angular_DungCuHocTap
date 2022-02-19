import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mapTo } from 'rxjs/operators';
import {
  ProductModelServer,
  serverResponse,
} from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-type-of-product',
  templateUrl: './type-of-product.component.html',
  styleUrls: ['./type-of-product.component.css'],
})
export class TypeOfProductComponent implements OnInit {
  productsList: ProductModelServer[] = [];

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((param) => param.get('tenloaisp')))
      .subscribe((val: any) => {
        if (val) {
          this.productService
            .getProductsFromType(val, 8)
            .subscribe((prods: serverResponse) => {
              this.productsList = prods.products;
            });
        } else {
          this.productService
            .getButVietDefault(8)
            .subscribe((prods: serverResponse) => {
              this.productsList = prods.products;
              console.log(this.productsList);
            });
        }
      });
    // let tenlsp = this.route.snapshot.paramMap.get('tenloaisp');
    // // @ts-ignore
    //   this.productService.getProductsFromType(tenlsp, 8).subscribe((prods: serverResponse ) => {
    //     this.productsList = prods.products;
    //     console.log(this.productsList);
    //   });

    // if(tenlsp == null){
    //   this.productService.getButVietDefault(8).subscribe((prods: serverResponse ) => {
    //     this.productsList = prods.products;
    //     console.log(this.productsList);
    //   });
    // }
  }

  selectProduct(masp: Number) {
    this.router.navigate(['/products', masp]).then();
  }

  AddProduct(masp: Number) {
    this.cartService.AddProductToCart(masp);
  }
}
