import { addItemToCart, removeItemFromCart } from './cartutils';

const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
const ADD_ITEM = 'ADD_ITEM';
const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const checkoutSuccess = () => ({
  type: CHECKOUT_SUCCESS,
});

const initialState = { hidden: true, cartItems: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CLEAR_CART:
    case CHECKOUT_SUCCESS:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default cartReducer;
