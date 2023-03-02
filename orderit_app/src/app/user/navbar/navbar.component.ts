import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  name:any
  ready:any
  hidden = false;
  count:any=0

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
ngOnInit(){
  this.name=JSON.parse(localStorage.getItem('username')||'')
    this.http.get(`http://localhost:3000/user/listoders/${this.name}`)
    .subscribe((result:any)=>{
      result.forEach((element:any) => {
        if(element.ready==true){
          this.count=this.count+1
          this.ready=true          
        }
      });
    })
}
constructor(private rout:Router,private http:HttpClient){}
logout(){
  const logout=confirm('PRESS OK TO LOGOUT')
    if(logout){
  localStorage.removeItem('username')
  localStorage.removeItem('admin')
  localStorage.removeItem('phone')
  this.rout.navigateByUrl('')
    }
}
}
