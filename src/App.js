import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './components/pages/hompage/Homepage.component';
import ShopPage from './components/pages/shop/ShopPage.component';
import Checkout from './components/pages/checkout/Checkout';
import Header from './components/Header/Header.component';
import SignInAndRegister from './components/SignInRegister/SignInRegister';
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-reducer';
import { selectCurrentUser } from './redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import {
  selector,
  selectCollectionsForPreview,
} from './redux/shop/shop-selector';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
        //to progrmatically add collections to firestore
        // addCollectionAndDocuments(
        //   'collections',
        //   collectionsArray.map(({ title, items }) => ({ title, items }))
        // );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndRegister />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
