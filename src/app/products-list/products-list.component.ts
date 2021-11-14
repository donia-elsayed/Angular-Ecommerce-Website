import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productsList;

  constructor(private productService :ProductsService) { }

  ngOnInit(): void {
    this.productService.getProductsList().subscribe(products => {
      this.productsList = products;
    })
  }
}
