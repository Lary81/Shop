import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {Shop} from '../../shop/shop/shop';

function type(action) {
  return action;
}

export const ActionTypes = {
  SEARCH:           type('[Cart] Search'),
  SEARCH_COMPLETE:  type('[Cart] Search Complete'),
  LOAD:             type('[Cart] Load'),
  SELECT:           type('[Cart] Select'),
  ADD_TO_CART:      type('[Cart] Add'),
  REMOVE_FROM_CART:      type('[Cart] Remove'),
};

@Injectable()
export class CartAction {

  constructor(private shop: Shop<any>) {

  }
  getState(): Observable<any> {
    return this.shop.select('cart');
  }

  addToCart(product, quantity) {
    console.log('add,', product)
    this.shop.dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: {
        product,
        quantity
      }
    })
  }

  removeFromCart(payload) {
    console.log('remove,', payload)
    this.shop.dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      payload: payload
    })
  }

}
