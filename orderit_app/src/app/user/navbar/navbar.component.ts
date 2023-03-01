import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  name:any
ngOnInit(){
  this.name=JSON.parse(localStorage.getItem('username')||'')
  
}
constructor(private rout:Router){}
logout(){
  localStorage.removeItem('username')
  localStorage.removeItem('admin')
  localStorage.removeItem('phone')
  this.rout.navigateByUrl('')

}
}
