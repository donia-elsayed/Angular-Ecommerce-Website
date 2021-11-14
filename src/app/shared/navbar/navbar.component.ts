import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count;
  shoppingCartCounter;
  constructor(private shoppingCartService: ShoppingCartService,private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(countProd => {
      this.count = countProd
    })
    this.shoppingCartService.currentCounter.subscribe(value => {
      this.shoppingCartCounter = value
    })
  }

}
