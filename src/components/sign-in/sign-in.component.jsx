import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from 'components/form-input/form-input.component';
import CustomButton from 'components/custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from 'redux/user/user.action';

import 'components/sign-in/sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I alrady have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          handleChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            isGoogleSignIn
            type="button"
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
