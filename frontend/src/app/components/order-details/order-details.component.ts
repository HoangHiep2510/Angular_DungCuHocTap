import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import {map} from "rxjs/operators";
import { CartModelServer } from 'src/app/models/cart.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  cartData!: CartModelServer;
  cartTotal!: Number;
  subTotal!: Number;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
     this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }
  ChangeQuantity(masp: Number, increaseQuantity: Boolean) {
    this.cartService.UpdateCartData(masp, increaseQuantity);
  }

}
