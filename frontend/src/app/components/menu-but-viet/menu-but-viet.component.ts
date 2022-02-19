import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer, serverResponse } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-but-viet',
  templateUrl: './menu-but-viet.component.html',
  styleUrls: ['./menu-but-viet.component.css']
})
export class MenuButVietComponent implements OnInit {
  productOT: ProductModelServer[] = [];
  constructor(public cartService: CartService,
              private productService: ProductsService,
              private router: Router) { }
  ngOnInit(): void {
    //Lấy sản phẩm theo loại sản phẩm
    this.productService.getAllTypeOfButViet().subscribe((prods: serverResponse ) => {
      this.productOT = prods.products;
      console.log(this.productOT);
    });
  }
}
