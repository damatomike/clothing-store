const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

const initialState = { hidden: true };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
