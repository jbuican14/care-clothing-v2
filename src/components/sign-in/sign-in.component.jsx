import React from 'react';

import 'components/sign-in/sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = (e) => {
    //pull value out
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I alrady have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="Email">Email</label>
          <input
            type="password"
            name="password"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
