import React from 'react';

import './CustomButton.styles.scss';

const CustomButton = (props) => {
  const { children, isGoogleSignIn, ...otherProps } = props;
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
