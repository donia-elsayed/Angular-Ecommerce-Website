import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingCartService } from '../shopping-cart.service';
import { AddCounterAction } from '../store/counter/counter.action';
import { AddWishListAction } from '../store/whishList/whishlist.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  shoppingCartCounter;
  shoppingCartItem;
  productItem;
  count;
  constructor(private shoppingCartService : ShoppingCartService,private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('whishlist').subscribe(item => {
      this.productItem = item.product;
    });
    this.store.select('counter').subscribe(countProd => {
      this.count = countProd
    })
    this.shoppingCartService.currentCounter.subscribe(value => {
      this.shoppingCartCounter = value;
    })
    this.shoppingCartService.currentItem.subscribe(value => {
      this.shoppingCartItem = value;
    })
  }
  addToWishList(prod) {
    let arr = this.productItem.findIndex(item => item.id == prod.id)
    if (arr == -1) {
      this.store.dispatch(new AddWishListAction(this.productItem = prod));
      this.store.dispatch(new AddCounterAction(this.count + 1));
    }
  }
  updateCart(pro) {
    this.shoppingCartService.updateShoppingCartCounter(++this.shoppingCartCounter);
    this.shoppingCartService.addProductToCart(pro);
  }
}
// if (this.productItem.indexOf(prod) == -1) {
//       this.store.dispatch(new AddWishListAction(this.productItem = prod));
//       this.store.dispatch(new AddCounterAction(this.count + 1));
//     }

