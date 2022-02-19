import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartModelServer } from 'src/app/models/cart.model';
import { ProductModelServer } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@ts-ignore
  cartData: CartModelServer;

  cartTotal!: Number;

  productOT: ProductModelServer[] = [];
  constructor(public cartService: CartService,
              private productService: ProductsService,
              private router: Router) { }

  ngOnInit() {
    this.cartService.cartTotal$.subscribe(total => {
      this.cartTotal = total;
    });

    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);

    }

}
