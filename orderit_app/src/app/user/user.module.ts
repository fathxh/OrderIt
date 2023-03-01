import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserRoutingModule } from './user-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import {MatTableModule} from '@angular/material/table';
import { PaytypeComponent } from './paytype/paytype.component';




@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    CartComponent,
    PaytypeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule
  ],exports:[
    UserRoutingModule
  ]
})
export class UserModule { }
