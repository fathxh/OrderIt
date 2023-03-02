import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data:any
  constructor(private http:HttpClient,private rout:Router){}
  ngOnInit(){
    const user=localStorage.getItem('username')
    if(!user){    
      alert('Please Login Again')
      this.rout.navigateByUrl('')
    }else{
    this.getfooditems()
    
    }
  }
  getfooditems(){
    return this.http.get("http://localhost:3000/user/list")
    .subscribe((result)=>{
      this.data= result   
    })
  }
  oder(item:any){    
    const customer=JSON.parse(localStorage.getItem('username')||'')
    const phone=JSON.parse(localStorage.getItem('phone')||'')
    const data={
      customer,
      item:item.productname,
      shop:item.shop,
      phone,
      price:item.price,
      totalprice:item.price,
      ready:false,
      count:1,
      paytype:"Not Selected"
    }
    return this.http.post("http://localhost:3000/user/order",data)
    .subscribe((result:any)=>{     
      alert(result.msg)   
      console.log(result);
      this.rout.navigateByUrl('user/cart')         
    },(result:any)=>{
      alert(result.msg)   
      this.rout.navigateByUrl('user/cart')
    })
    
  }
}
