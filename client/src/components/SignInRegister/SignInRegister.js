import React from 'react';

import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import { SignInAndSignUpContainer } from './SignInRegister.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
