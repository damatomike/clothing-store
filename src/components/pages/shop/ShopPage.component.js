import React, { Component } from 'react';
import CollectionPreview from '../../CollectionPreview/CollectionPreview.component';
import { selectCollections } from '../../../redux/shop/shop-selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
