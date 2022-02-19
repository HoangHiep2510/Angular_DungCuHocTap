import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxSpinnerModule} from "ngx-spinner";
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { MenuButVietComponent } from './components/menu-but-viet/menu-but-viet.component';
import { MenuBaloComponent } from './components/menu-balo/menu-balo.component';
import { MenuHopButComponent } from './components/menu-hop-but/menu-hop-but.component';
import { MenuTapVoComponent } from './components/menu-tap-vo/menu-tap-vo.component';
import { MenuMayTinhComponent } from './components/menu-may-tinh/menu-may-tinh.component';
import { TypeOfProductComponent } from './components/type-of-product/type-of-product.component';
import { TypeOfButVietComponent } from './components/type-of-but-viet/type-of-but-viet.component';
import { TypeOfHopButComponent } from './components/type-of-hop-but/type-of-hop-but.component';
import { TypeOfBaloComponent } from './components/type-of-balo/type-of-balo.component';
import { TypeOfTapVoComponent } from './components/type-of-tap-vo/type-of-tap-vo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    OrderDetailsComponent,
    MenuButVietComponent,
    MenuBaloComponent,
    MenuHopButComponent,
    MenuTapVoComponent,
    MenuMayTinhComponent,
    TypeOfProductComponent,
    TypeOfButVietComponent,
    TypeOfHopButComponent,
    TypeOfBaloComponent,
    TypeOfTapVoComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
