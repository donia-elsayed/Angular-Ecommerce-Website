import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-whish-list',
  templateUrl: './whish-list.component.html',
  styleUrls: ['./whish-list.component.css']
})
export class WhishListComponent implements OnInit {

  wishItems;
  count;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('whishlist').subscribe(prod => {
      this.wishItems = prod.product;
    })
    this.store.select('counter').subscribe(countProd => {
      this.count = countProd
    })
  }
}

