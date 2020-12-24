import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from 'components/custom-button/custom-button.component';
import CartItem from 'components/cart-item/cart-item.component';
import { selectCartItems } from 'redux/cart/cart.selectors';

import 'components/cart-dropdown/cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  console.log('carttems', cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
        <CustomButton>Go to Checkout</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
