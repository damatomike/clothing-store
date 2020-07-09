import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/pages/hompage/Homepage.component';
import ShopPage from './components/pages/shop/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInAndRegister from './components/SignInRegister/SignInRegister';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegister} />
        </Switch>
      </div>
    );
  }
}

export default App;
