import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TypeOfBaloComponent } from './components/type-of-balo/type-of-balo.component';
import { TypeOfButVietComponent } from './components/type-of-but-viet/type-of-but-viet.component';
import { TypeOfHopButComponent } from './components/type-of-hop-but/type-of-hop-but.component';
import { TypeOfTapVoComponent } from './components/type-of-tap-vo/type-of-tap-vo.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'orderdetails', component: OrderDetailsComponent},
  {path: 'products/loaisanpham/:tenloaisp', component: MainComponent},
  {path: 'ButViet', component: TypeOfButVietComponent},
  {path: 'Balo', component: TypeOfBaloComponent},
  {path: 'HopBut', component: TypeOfHopButComponent},
  {path: 'TapVo', component: TypeOfTapVoComponent},
  {path: 'products/:masanpham', component: ProductsComponent},
  {path: 'dangnhap', component: LoginComponent},
  {path: 'dangky', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
