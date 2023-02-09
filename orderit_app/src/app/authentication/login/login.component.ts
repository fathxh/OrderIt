import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  phone: any
  password = ""
  constructor(private rout: Router, private service: BackendService) { }
  ngOnInit(): void {
    
  }
  login() {
    var phone = this.phone
    var password = this.password
    this.service.login({ phone, password })
      .subscribe((user: any) => {
        if (user) {
          alert(user.message)
          localStorage.setItem("name", JSON.stringify(user.data[0].name))
          localStorage.setItem("admin", JSON.stringify(user.data[0].admin))
          localStorage.setItem("phone", JSON.stringify(user.data[0].phone))
          
          if (user.data[0].admin==true) {
            this.rout.navigateByUrl('shop')
          } else {
            this.rout.navigateByUrl('user')
          }
        } else {
          alert("can't connect")
        }
      }, (user: any) => {
        alert(user.error.message)
        location.reload()
      })


  }

  onreg() {
    this.rout.navigateByUrl('register')
  }

}
