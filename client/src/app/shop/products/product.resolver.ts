import {Product} from './products';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ProductsService} from './products.service';

export class ProductResolver implements Resolve<Product> {

  constructor(@Inject('BooksService') private productsService:ProductsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this.productsService.getById(+route.paramMap.get('id'))
  }

}
