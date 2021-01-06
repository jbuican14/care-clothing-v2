import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from 'assets/crown.svg';
import { auth } from 'firebase/firebase.utils';
import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.compoenent';
import { selectCartHidden } from 'redux/cart/cart.selectors';
import { selectCurrentUser } from 'redux/user/user.selectors';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from 'components/header/header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/shop">Contact</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to="/signin">Sign In</OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
