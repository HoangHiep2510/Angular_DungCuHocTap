import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer, serverResponse } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-tap-vo',
  templateUrl: './menu-tap-vo.component.html',
  styleUrls: ['./menu-tap-vo.component.css']
})
export class MenuTapVoComponent implements OnInit {

  productOT: ProductModelServer[] = [];
  constructor(public cartService: CartService,
              private productService: ProductsService,
              private router: Router) { }


  ngOnInit(): void {
    //Lấy sản phẩm theo loại sản phẩm
    this.productService.getAllTypeOfTapVo().subscribe((prods: serverResponse ) => {
      this.productOT = prods.products;
      console.log(this.productOT);
    });
  }

}
