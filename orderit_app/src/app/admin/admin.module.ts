import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './adminhome/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import {MatTableModule} from '@angular/material/table';
import { NavbarComponent } from './navbar/navbar.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AddproductComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule
  ],
  exports:[
   AdminRoutingModule
  ]
})
export class AdminModule { }
