import React from 'react';
import { Row, Input, Button, } from 'react-materialize';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom'

export class SignupForm extends React.Component {
  state = {
    username: '',
    password: '',
    confirm: '',
    usernameError: '',
    passwordError: '',
    confirmError: '',
    registerError: false,
    errorMsg: '',
    redirectTo: null
  };

  handleUserChange = event => {
    this.setState({ username: event.target.value, usernameError: '', registerError: false });
  }

  handlePassChange = event => {
    this.setState({ password: event.target.value, passwordError: '' });
  }

  handleConfirmChange = event => {
    this.setState({ confirm: event.target.value, confirmError: '' });
  }

  validateForm = () => {
    let result = true;

    // Username must consist of letters and/or numbers
    if (!(/^[a-zA-Z0-9]+$/).test(this.state.username)) {
      result = false;
      this.setState({
        usernameError: 'Use letters and/or numbers only',
      });
    }
    // contains at least 1 lowercase, 1 uppercase, and one number
    if (!(/^[a-zA-Z0-9_\-\.~[\]@!$'()\*+;,= ]{2,30}$/).test(this.state.password)) {
      result = false;
      this.setState({
        passwordError: 'Not secure enough',
      });
    }
    // Confirmation must match the password
    if (this.state.password !== this.state.confirm) {
      result = false;
      this.setState({
        confirmError: 'Passwords do not match',
      });
    }
    return result;
  }

  handleSubmit = event => {
    event.preventDefault();

    const valid = this.validateForm();

    if (valid) {
      const newUser = {
        username: this.state.username,
        password: this.state.password,
      };
      this.setState({ preloader: true });
      setTimeout(() => {
        API.createUser(newUser)
          .then((res) => {
            if (typeof res.data === 'object') {
              this.setState({
                username: '',
                password: '',
                confirm: '',
                usernameError: '',
                passwordError: '',
                confirmError: '',
                registerError:false,
                errorMsg: '',
                redirectTo: '/login'
              });
            } else if (typeof res.data === 'string') {
              this.setState({
                registerError: true,
                errorMsg: res.data,
              });
            } 
          })
          .catch(err => {
            this.setState({
              username: '',
              password: '',
              confirm: '',
              usernameError: '',
              passwordError: '',
              confirmError: '',
              registerError: true,
              errorMsg: 'Ooops! Something went wrong, try again later',
            });
          });
      }, 2000);    
    }
  }

  //button disabled so don't have to use express-validator
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <div>
        <div className="SignupForm">
          <Input
            label="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleUserChange}
          />
          <div className="error-msg" >
            {this.state.usernameError}
          </div>
          <Input
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePassChange}
          />
          <div className="error-msg" >
            {this.state.passwordError}
          </div>
          <Input
            label="Confirm Password"
            type="password"
            name="confirm"
            value={this.state.confirm}
            onChange={this.handleConfirmChange}
          />
          <div className="error-msg" >
            {this.state.confirmError}
          </div>
        </div>
        {this.state.registerError ? (
            <span className="err-msg">{this.state.errorMsg}</span>
          ) : (
            <span className="err-msg">Please fill out correctly</span>
          )
        }
        <Button
          disabled={!this.state.username || !this.state.password || !this.state.confirm}
          onClick={this.handleSubmit}
          className="btn-form"
        >
          Create
        </Button>
      </div>
    );
  }
}

export default SignupForm
