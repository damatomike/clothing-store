import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundContainer } from './NotFound.styles.js';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h2>Uh oh, it looks like the page you are looking for is not found.</h2>
      <h3>
        <Link to="/">Go Back Home</Link>
      </h3>
    </NotFoundContainer>
  );
};

export default NotFound;
