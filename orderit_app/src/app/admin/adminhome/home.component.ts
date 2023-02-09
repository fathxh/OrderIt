import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';


export interface PeriodicElement {
  productname: string;
  description: number;
  price: number;
  time: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  displayedColumns: string[] = ['productname', 'description', 'price', 'time','action'];
  dataSource:any

  ngOnInit(){
    const user=localStorage.getItem('name')
    if(user){
      this.as.getitems(this.shop)
      .subscribe((result)=>{
        
        this.dataSource=result
      }) 
    }else{
      alert('please login again')
      this.rout.navigateByUrl('')
    }

    
  }
  constructor(private as:AdminService,private rout:Router){}

  shop=JSON.parse(localStorage.getItem('name')||'')

  delete(name:any){
    const yes=confirm("Are you sure to delete "+name+"?")
    if(yes){
      this.as.delete(name,this.shop)
    .subscribe((result)=>{
      location.reload();
    })
    }
    
  }
 

}
