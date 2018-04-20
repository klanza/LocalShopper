import React, { Component } from "react";
import {Button, Icon} from 'react-materialize';
import {Inputs, SearchButton} from "../../components/Input"
//import {DeleteBtn,SaveBtn} from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
// import Segment from "../../components/Segment";
import { Link } from "react-router-dom";
import { Col, Row, Container} from "../../components/Grid";
//import { Input, FormBtn } from "../../components/Form";

class SignIn extends Component {

  state = {

    loggedIn: false,

    user: {},

    username: "",
    password: "",
  };

  handleFormSubmit = () =>{
    //Do authentication stuff on this.state.user.username and this.state.user.password
    //After that, fill in the rest of the user in state.  
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
    console.log(this.state)
};

render() {

  return (
      <div>
      <Nav>
      </Nav>
      <Container>

          <Row>
              <div className="col s6 offset-s3">
                  <h4 className="">Log Into Your Account</h4>
              </div>
          </Row>
          <Row>
              <form className="col s12">
                  <Row>
                      <div className="input-field col s6 offset-s3">
                          <i className="material-icons prefix">assignment_ind</i>
                          <Inputs
                              value={this.state.username}
                              onChange={this.handleInputChange}
                              id="icon_prefix"
                              name="username"
                          />
                          <label for="icon_prefix">E-mail</label>
                      </div>
                  </Row>
                  <Row>
                      <div className="input-field col s6 offset-s3">
                          <i className="material-icons prefix">lock</i>
                          <Inputs
                              value={this.state.password}
                              onChange={this.handleInputChange}
                              id="icon_prefix"
                              name="password"
                          />                            
                          <label for="icon_prefix">Password</label>
                      </div>
                  </Row>
                  <Row>
                      <Button 
                        className="col s6 offset-s3 green lighten-1" 
                        waves='light'

                        >Sign
                        <Icon right>send</Icon>
                      
                      </Button>
                  </Row>
              </form>
          </Row>
      </Container>
      <Footer>
      </Footer>
      </div>
  );
}
}

export default SignIn;
