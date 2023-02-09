import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

export interface PeriodicElement {
  productname: string;
  description: number;
  price: number;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  displayedColumns: string[] = ['productname', 'description', 'price','action'];
  dataSource:any
  constructor(private http:HttpClient,private srv:AdminService){}
  user=JSON.parse(localStorage.getItem('name')||'')
  ngOnInit(){
    this.http.get(`http://localhost:3000/shops/oders/${this.user}`)
    .subscribe((result)=>{
      this.dataSource=result
    })
  }
  markdone(items:any){
     this.srv.markdone(items.customer,items.item,items.shop)
    .subscribe((result:any)=>{
      if(result.modifiedCount!=0){
        alert("Marked Successfully")
      }else{
        alert("Failed Marking")
      }
      location.reload()      
    })
  }

}
