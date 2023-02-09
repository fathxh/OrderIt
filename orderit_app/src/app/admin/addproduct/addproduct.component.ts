import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
  pname: any
  price:any 
  discription:any 
  photo:any 
  time:any 

  constructor(private srv:AdminService,private rout:Router){}

  addproduct() {
    const shop=JSON.parse(localStorage.getItem('name')||'');
    this.srv.addproduct(shop,this.pname,this.discription,this.price,this.photo,this.time)
    .subscribe((result:any)=>{
      alert(result.msg)
      this.rout.navigateByUrl('shop')
    
    })
    
  }
  
}
