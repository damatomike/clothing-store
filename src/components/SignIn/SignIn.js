import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.styles.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    // const { value, name } = event.target;
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Returning Users</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="E-mail"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
