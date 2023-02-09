import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
   
  }

  login(data: any): Observable<any> {
    
    const newProduct = Object.assign({}, {
      phone: data.phone,
      password: data.password,
    })
    return this.http.post('http://localhost:3000/auth/login', newProduct);
  }
  register(data: any): Observable<any> {
    const newProduct = {
      name:data.name,
      admin:data.admin,
      phone: data.phone,
      password: data.password
    }
    return this.http.post('http://localhost:3000/auth/register', newProduct);
  }
}
