import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom'

export class LoginForm extends React.Component {
  //give state error fields to set to the error 
  state = {
    username: '',
    password: '',
    message: 'Enter your username and password',
    systemError: false,
    redirectTo: null
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    //set timeout because i got stuck in a request that wasn't being caught 
    setTimeout(() => {
      API.getVerification(this.state.username, this.state.password).then((res) => {
        //message comes from loginController from passport localStrategy!!
        if (res.data.message === 'Incorrect username' || res.data.message === 'Incorrect password') {
          this.setState({
            systemError: true,
            message: 'Incorrect username or password',
          });
        } else {
          this.setState({
            systemError: false,
            message: '',
            //set this route to default user page
            redirectTo: '/'
          });
        console.log('welcome')
        }
      })
      .catch(err => {
        this.setState({
          systemError: true,
          message: 'Something went wrong',
        });
      });
    }, 2000);
  }

  //button disabled so don't have to use express-validator
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <div className="LoginForm">
            <Input
              label="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
            <span className="err-msg err-msg-login">{this.state.message}</span>
          <Button
            disabled={!this.state.username || !this.state.password}
            onClick={this.handleSubmit}
          >
            Log In
          </Button>
        </div>
      );
    }
  }
}

export default LoginForm
