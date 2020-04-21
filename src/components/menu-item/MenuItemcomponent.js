import React from 'react';

import './MenuItemstyles.scss';

const MenuItem = (props) => {
  const { title, imageUrl, size } = props;
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
