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
    const user=localStorage.getItem('name')
    if(!user){    
      alert('Please Login Again')
      this.rout.navigateByUrl('')
    }else{
    this.getfooditems()
    const name=JSON.parse(localStorage.getItem('name')||"")
    this.http.get(`http://localhost:3000/user/listoders/${name}`)
    .subscribe((result:any)=>{
      result.forEach((element:any) => {
        if(element.ready==true){
          alert('Orders Status Updated,Check Your Cart')
        }
      });
      console.log("reds",result);
    })
    }
  }
  getfooditems(){
    return this.http.get("http://localhost:3000/user/list")
    .subscribe((result)=>{
      this.data= result   
    })
  }
  oder(item:any){    
    const customer=JSON.parse(localStorage.getItem('name')||'')
    const phone=JSON.parse(localStorage.getItem('phone')||'')
    const data={
      customer,
      item:item.productname,
      shop:item.shop,
      phone,
      price:item.price,
      ready:false
    }
    return this.http.post("http://localhost:3000/user/order",data)
    .subscribe((result:any)=>{     
      alert(result.msg)      
    })
    
  }
}
