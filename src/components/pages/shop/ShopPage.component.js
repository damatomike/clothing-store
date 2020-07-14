import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
