import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { 
    
  }
  addproduct(shop:any,productname:any,description:any,price:any,photo:any,time:any):Observable <any>{
      const data={
          shop,
          productname,
          description,
          photo,
          price,
          time
      }
     return this.http.post('http://localhost:3000/shops',data)

  }
  getitems(shop:any){
    return this.http.get(`http://localhost:3000/shops/list/${shop}`)
  }
  delete(productname:any,shop:any){
    const data={
      shop,
      productname
  }
 return this.http.post('http://localhost:3000/shops/deleteproduct',data)
  }
  markdone(customer:any,item:any,shop:any){
    const data={
      customer,
      item,
      shop
    }
    return this.http.put(`http://localhost:3000/shops/status`,data)
  }
}
