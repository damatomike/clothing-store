import React from 'react';
import './CartDropDown.styles.scss';
import CustomButton from '../CustomButton/CustomButton';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
