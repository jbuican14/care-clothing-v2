import React from 'react';

import SignIn from 'components/sign-in/sign-in.component';
import SignUp from 'components/sign-up/sign-up.component';
import { SignInAndSignUp } from 'pages/sign-in-and-sign-up/sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUp>
    <SignIn />
    <SignUp />
  </SignInAndSignUp>
);

export default SignInAndSignUpPage;
