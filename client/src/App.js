import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/Header.component';
import Spinner from './components/Spinner/Spinner.component';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { selectCurrentUser } from './redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user-reducer';
import { GlobalStyle } from './global.styles';

const Homepage = lazy(() =>
  import('./components/pages/Homepage/Homepage.component')
);
const ShopPage = lazy(() =>
  import('./components/pages/shop/ShopPage.component')
);
const SignInAndRegister = lazy(() =>
  import('./components/SignInRegister/SignInRegister')
);
const Checkout = lazy(() => import('./components/pages/checkout/Checkout'));

const ThankYou = lazy(() => import('./components/pages/ThankYou/ThankYou'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/thankyou" component={ThankYou} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndRegister />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
