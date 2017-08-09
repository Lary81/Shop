
  import {Product} from '../../shop/products/products';
  import {Action} from 'rxjs/scheduler/Action';
  import {ActionTypes} from './cart.actions';
  export interface IState {
  products: Array<Product>;
}

const initialState: IState = {
  products: []
};

// export const reducer = (state = initialState, action: Action): IState => {
//   switch (action.type) {
//     case ActionTypes.ADD_TO_CART: {
//       const addProduct = Object.assign({}, action.payload.product);
//       addProduct.quantity = action.payload.quantity;
//       addProduct.price = (parseInt(addProduct.price) * parseInt(addProduct.quantity)).toFixed(2);
//       return {
//         ...state,
//         products: [
//           ...state.products,
//           addProduct
//         ]
//       };
//     };
//     case ActionTypes.REMOVE_FROM_CART: {
//       //  return a new array excluding the product that needs to be removed
//       const index = state.products.findIndex((product) => product.id === action.payload.id);
//       return {
//         ...state,
//         products: [
//           ...state.products.slice(0, index),
//           ...state.products.slice(index + 1)
//         ]
//       }
//     }
//
//     default:
//       return state;
//   }
// }
