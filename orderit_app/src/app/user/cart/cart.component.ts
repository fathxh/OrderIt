import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface PeriodicElement {
  productname: string;
  description: number;
  price: number;
  ready:boolean;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  displayedColumns: string[] = ['productname', 'description', 'price','count','status','action'];
  dataSource:any
  constructor(private http:HttpClient){}
  user=JSON.parse(localStorage.getItem('username')||'')
  ngOnInit(){
    this.http.get(`http://localhost:3000/user/listoders/${this.user}`)
    .subscribe((result)=>{
      this.dataSource=result
    })
  }
  delete(items:any){
    var msg:any
    items.ready==true?msg="mark":msg="Cancel"
    const con=confirm('do you want to '+msg+' '+items.item)
    if(con){
      const data={
        customer:this.user,
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
  cashPay(items:any){
    const data={
      customer:this.user,
      item:items.item,
      shop:items.shop
    }
    this.http.post(`http://localhost:3000/user/cash`,data)
      .subscribe((result)=>{
        console.log(result);
        location.reload()
        
      }) 
  }
  countdec(items:any){
    const data={
      add:false,
      customer:this.user,
      item:items.item,
      shop:items.shop,
      count:items.count,
      price:items.price
    }
    this.http.post(`http://localhost:3000/user/updateorder`,data)
      .subscribe((result)=>{
        console.log(result);
        location.reload()
        
      })
  }
  countinc(items:any){
    const data={
      add:true,
      customer:this.user,
      item:items.item,
      shop:items.shop,
      count:items.count,
      price:items.price
    }
    this.http.post(`http://localhost:3000/user/updateorder`,data)
      .subscribe((result)=>{
        console.log(result);
        location.reload()
        
      })
  }
}

