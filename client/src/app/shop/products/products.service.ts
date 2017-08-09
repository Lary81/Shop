import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import "rxjs/add/operator/mergeMap";
import {Product} from './products';
import 'rxjs/add/operator/toArray';


@Injectable()
export class ProductsService {

  products: Observable<Product>



  private baseUrl = "http://localhost:8443/products"

  constructor(private http: Http) {
  }

  getById(id: number): Observable<Product> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .map(responese => responese.json())
      .map(json => new Product(json))
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl)
      .map(responese => responese.json())
      // .flatMap(products => products)
      // .map(product => new Product(product))
      // .toArray( )
  }

  save(product: any): Observable<any> {
    return this.http.post(this.baseUrl, product)
  }

  update(product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${product.id}`, product)
  }
// addToCart(product: any):Observable<any>{
//     return this.http.put(`${this.baseUrl}/${product.id}`, product)
//}
}


