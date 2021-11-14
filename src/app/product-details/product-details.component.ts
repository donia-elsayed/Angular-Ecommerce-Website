import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: any;
  shoppingCartCounter;
  // @Input() product: any;
  shoppingCartItem;
  constructor(private activeRoute: ActivatedRoute, private productDetails: ProductsService,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.productDetails.getProductsDetails(params.id).subscribe(product => {
        this.selectedProduct = product;
      })
    });
    this.shoppingCartService.currentCounter.subscribe(value => {
      this.shoppingCartCounter = value
    })
    this.shoppingCartService.currentItem.subscribe(value => {
      this.shoppingCartItem = value;
    })
  }
  updateCart(pro) {
    this.shoppingCartService.updateShoppingCartCounter(++this.shoppingCartCounter);
    this.shoppingCartService.addProductToCart(pro);
  }
}
