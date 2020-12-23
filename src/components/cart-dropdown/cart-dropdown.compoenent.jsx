import React from 'react';

import CustomButton from 'components/custom-button/custom-button.component';

import 'components/cart-dropdown/cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  </div>
);

export default CartDropdown;
