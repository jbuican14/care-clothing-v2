import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import 'App.css';

import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/Homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SignInAndSignUpPage from 'pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from 'pages/checkout/checkout.component';

import { selectCurrentUser } from 'redux/user/user.selectors';
import { checkUserSession } from 'redux/user/user.action';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log('this.props currentUser', this.props);
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    // this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStatToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStatToProps, mapDispatchToProps)(App);
