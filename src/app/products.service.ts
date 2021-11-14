import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProductsList() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getProductsDetails(id) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
