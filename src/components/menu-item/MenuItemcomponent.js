import React from 'react';

import './MenuItemstyles.scss';

const MenuItem = (props) => {
  const { title } = props;
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
