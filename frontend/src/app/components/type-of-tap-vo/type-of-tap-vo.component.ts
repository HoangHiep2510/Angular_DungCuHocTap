import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModelServer, serverResponse } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-type-of-tap-vo',
  templateUrl: './type-of-tap-vo.component.html',
  styleUrls: ['./type-of-tap-vo.component.css']
})
export class TypeOfTapVoComponent implements OnInit {

  slsp : any;

  productsList: ProductModelServer[]=[];

  constructor(private productService: ProductsService,
              private router: Router,
              private route: ActivatedRoute,
              private cartService: CartService) {}

  ngOnInit(): void {
    this.slsp = 8;
    // @ts-ignore
      this.productService.getProductsFromType('TapVo', this.slsp).subscribe((prods: serverResponse ) => {
        this.productsList = prods.products;
        console.log(this.productsList);
      });
  }

  resetProduct(sl: any){
    this.slsp += 8;
    this.productService.getProductsFromType('TapVo',sl).subscribe((prods: serverResponse ) => {
      this.productsList = prods.products;
      console.log(this.productsList);
    });
  }

  selectProduct(masp: Number) {
    this.router.navigate(['/products', masp]).then();
  }

  AddProduct(masp: Number) {
    this.cartService.AddProductToCart(masp);
  }
}
