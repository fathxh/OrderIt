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
  displayedColumns: string[] = ['productname', 'description', 'price', 'time', 'action'];
  dataSource: any
  constructor(private as: AdminService, private rout: Router) { }

  ngOnInit() {
    const user = localStorage.getItem('name')
    if (!user) {
      alert('please login again')
      this.rout.navigateByUrl('')
    } else {
      const shop = JSON.parse(localStorage.getItem('name') || '')
      this.as.getitems(shop)
        .subscribe((result) => {
          console.log(result);

          this.dataSource = result
        })
    }
  }


  delete(name: any) {
    const yes = confirm("Are you sure to delete " + name + "?")
    if (yes) {
      const shop = JSON.parse(localStorage.getItem('name') || '')
      this.as.delete(name, shop)
        .subscribe((result) => {
          location.reload();
        })
    }

  }


}
