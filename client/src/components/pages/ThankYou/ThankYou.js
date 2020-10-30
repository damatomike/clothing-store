import React from 'react';
import { Link } from 'react-router-dom';
import { ThankYouContainer } from './ThankYou.styles.js';

const ThankYou = () => {
  return (
    <ThankYouContainer>
      <h2>Thank you for shopping with us</h2>
      <h3>
        <Link to="/shop">Forgot something?</Link>
      </h3>
    </ThankYouContainer>
  );
};

export default ThankYou;
