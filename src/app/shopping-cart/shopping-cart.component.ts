import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItem;
  shoppingCartCounter;
  // totalPrice = 0;
  constructor(private shoppingCartService : ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.currentItem.subscribe(value => {
      this.shoppingCartItem = value;
    })
    // this.calcTotal();
    this.shoppingCartService.currentCounter.subscribe(value => {
      this.shoppingCartCounter = value;
    })
  }
  increaseQuantity(item) {
    item.quantity = item.quantity + 1;
    item.total = item.quantity * item.price;
 }
 decreesQuantity(item) {
   item.quantity = item.quantity <= 0 ? 0 : item.quantity - 1;
   if (item.quantity <= 0) {
     item.total =  item.price;
   }
   else {
       item.total = item.price * item.quantity;
   }
  //  this.totalPrice = item.total;
 }
  removeProduct(product) {
    // if (this.shoppingCartItem.length == 0) {
    //   this.totalPrice = 0;
    // }
    // this.totalPrice = this.totalPrice - product.total;
      this.shoppingCartItem.splice(this.shoppingCartItem[product], 1);
      this.shoppingCartService.updateShoppingCartCounter(this.shoppingCartItem.length);
 }
  // calcTotal() {
  //   this.shoppingCartItem.map((elem) => {
  //     this.totalPrice += elem.total;
  //   });
  //   return this.totalPrice;
  // }
}
