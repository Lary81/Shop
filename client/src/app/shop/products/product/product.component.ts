import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../products';
import {ProductsService} from '../products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {


  // products: Observable<[Product]>

  prod = [];


  // constructor(  private productsService: ProductsService, activatedRoute: ActivatedRoute) {
  //    this.productsService.getAll().subscribe(response => console.log(response))
  //   console.log(activatedRoute.snapshot.data)
  // }
  constructor(  private productsService: ProductsService, activatedRoute: ActivatedRoute) {
     this.productsService.getAll().subscribe(response => {
       this.prod = response.products
     })
  }
  // addToCart(products) {
  //    this.productsService.addToCart(products)
  //   console.log(this.quantity)
  //   this.cartStore.addToCart(products, this.quantity || 1)
  // }

}
