import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private rout:Router){
  }
  name:any
  ngOnInit(){
    this.name=JSON.parse(localStorage.getItem('name')||'')
    
  }
  logout(){
    const logout=confirm('PRESS OK TO LOGOUT')
    if(logout){
    localStorage.removeItem('name')
    localStorage.removeItem('admin')
    localStorage.removeItem('phone')
    this.rout.navigateByUrl('')
    }
  }
}
