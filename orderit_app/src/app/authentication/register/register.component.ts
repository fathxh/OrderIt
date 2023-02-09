import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    name: ['', [Validators.required]],
    admin: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(4)]]
  })

  constructor(private fb: FormBuilder,private service:BackendService, private rout: Router) { }
  ngOnInit(): void {
  }



  register() {
    var name:any = this.form.value.name
    var admin:any = this.form.value.admin
    var phone:any = this.form.value.phone
    var password:any = this.form.value.password
    if (this.form.valid){
      this.service.register({name, admin, phone, password})
        .subscribe((user) => {
          if(user){
            alert(user.message)
            this.rout.navigateByUrl('')
          }
        },(user) => {
          alert(user.error.message)
          this.rout.navigateByUrl('')
        })
    }
  }
}
