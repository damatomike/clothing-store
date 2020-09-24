import React from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import './SignInRegister.scss';

const SignInRegister = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInRegister;
