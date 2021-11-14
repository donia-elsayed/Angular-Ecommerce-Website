import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems:any = [];
  private shoppingCartCounter = new BehaviorSubject(0);
  currentCounter = this.shoppingCartCounter.asObservable();
  private shoppingCartItem = new BehaviorSubject<any>([]);
  currentItem = this.shoppingCartItem.asObservable();
  constructor() { }
  updateShoppingCartCounter(product) {
    this.shoppingCartCounter.next(product);
  }
  addProductToCart(product) {
    let newItem = this.cartItems.findIndex(item => item.id == product.id);
    if (newItem != -1) {
      this.cartItems[newItem].quantity = this.cartItems[newItem].quantity + 1;
      this.cartItems[newItem].total = this.cartItems[newItem].price * this.cartItems[newItem].quantity;
    }
    else {
      product.quantity = 1;
      product.total = product.price;
      this.cartItems.push(product);
    }
    this.shoppingCartItem.next(this.cartItems);

  }
}
