import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

export interface PeriodicElement {
  productname: string;
  description: number;
  price: number;
  count: number;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  displayedColumns: string[] = ['productname', 'description', 'price','count','action','action2'];
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
  delete(items:any){
    var msg:any
    items.ready==true?msg="mark":msg="Cancel"
    const con=confirm('do you want to '+msg+' '+items.item)
    if(con){
      const data={
        customer:items.customer,
        item:items.item,
        shop:items.shop
      }
      this.http.post(`http://localhost:3000/user/orderdelete`,data)
      .subscribe((result)=>{
        console.log(result);
        location.reload()
        })
    }
  }

}
