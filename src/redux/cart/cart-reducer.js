import { addItemToCart } from './cartutils';

const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
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
    case DELETE_ITEM:

    default:
      return state;
  }
};

export default cartReducer;
