import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import 'App.css';

import HomePage from 'pages/homepage/Homepage.component';
import ShopPage from 'pages/shop/shop.component';
import Header from 'components/header/header.component';
import SignInAndSignUpPage from 'pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import { setCurrentUser } from 'redux/user/user.action';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // this.setState({ currentUser: user });
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
