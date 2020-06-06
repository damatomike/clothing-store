import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/pages/hompage/Homepage.component';
import ShopPage from './components/pages/shop/ShopPage.component';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
