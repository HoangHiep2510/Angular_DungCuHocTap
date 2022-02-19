import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModelServer, serverResponse } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cartService: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  selectProduct(masp: Number) {
    this.router.navigate(['/products', masp]).then();
  }

  AddProduct(masp: Number) {
    this.cartService.AddProductToCart(masp);
  }


}
