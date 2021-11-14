import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddCounterAction } from '../store/counter/counter.action';
import { RemoveWishListAction } from '../store/whishList/whishlist.action';

@Component({
  selector: 'app-whish-list-item',
  templateUrl: './whish-list-item.component.html',
  styleUrls: ['./whish-list-item.component.css']
})
export class WhishListItemComponent implements OnInit {
  @Input() item: any;
  productArr;
  count;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('whishlist').subscribe(item => {
      this.productArr = item.product;
    });
    this.store.select('counter').subscribe(countProd => {
      this.count = countProd
    })
  }
  RemoveItem(prodValue) {
    prodValue = this.productArr.filter(item => {
      return prodValue.id != item.id
    })
    this.store.dispatch(new RemoveWishListAction(prodValue));
    this.store.dispatch(new AddCounterAction(--this.count));
  }
}
