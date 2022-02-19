import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer, serverResponse } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-balo',
  templateUrl: './menu-balo.component.html',
  styleUrls: ['./menu-balo.component.css']
})
export class MenuBaloComponent implements OnInit {

  productOT: ProductModelServer[] = [];
  constructor(public cartService: CartService,
    private productService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllTypeOfBalo().subscribe((prods: serverResponse ) => {
      this.productOT = prods.products;
      console.log(this.productOT);
    });
  }

}
