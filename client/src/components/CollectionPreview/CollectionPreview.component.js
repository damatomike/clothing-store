import React from 'react';
import CollectionItem from '../Collection-Item/CollectionItem.component';
import { Link } from 'react-router-dom';

import './CollectionPreview.styles.scss';

const CollectionPreview = (props) => {
  const { title, items } = props;
  const itemsList = items
    .filter((item, idx) => idx < 4)
    .map((item) => <CollectionItem key={item.id} item={item} />);

  return (
    <div className="collection-preview">
      <h1 className="title">
        <Link to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
      </h1>
      <div className="preview">{itemsList}</div>
    </div>
  );
};

export default CollectionPreview;
