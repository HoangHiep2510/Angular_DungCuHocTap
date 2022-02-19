import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer, serverResponse } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-hop-but',
  templateUrl: './menu-hop-but.component.html',
  styleUrls: ['./menu-hop-but.component.css']
})
export class MenuHopButComponent implements OnInit {

  productOT: ProductModelServer[] = [];
  constructor(public cartService: CartService,
              private productService: ProductsService,
              private router: Router) { }


  ngOnInit(): void {
    //Lấy sản phẩm theo loại sản phẩm
    this.productService.getAllTypeOfHopBut().subscribe((prods: serverResponse ) => {
      this.productOT = prods.products;
      console.log(this.productOT);
    });
  }

}
