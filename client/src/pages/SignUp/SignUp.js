import React, { Component } from "react";
import {Inputs, SearchButton} from "../../components/Input"
import {Button, Icon} from 'react-materialize';
//import {DeleteBtn,SaveBtn} from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
// import Segment from "../../components/Segment";
import { Link } from "react-router-dom";
import { Col, Row, Container} from "../../components/Grid";
//import { Input, FormBtn } from "../../components/Form";

class SignUp extends Component {

  state = {
    user: [],
    username: "",
    password: "",
    address: "",
    storeName: "",
    picture: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
    console.log(this.state)
};

// handleFormSubmit = event => {
//   event.preventDefault();
//   if (this.state.searchTerm) {
//       let searchTerm = this.state.searchTerm
//       console.log(searchTerm)
//       API.getAllProduct()
//           .then(res => this.setState({ products: res.data, search: ""})
//   )
//           .catch(err => console.log(err))
//   }
// };

  render() {
    // const styles = {
    //   transform: `translateX(${-105}%)`
    // };
    return (
        <div>
        <Nav>
        </Nav>
        <Container>

            <Row>
                <div className="col s6 offset-s3">
                    <h4 className="">Create your account!</h4>
                    <h6>You're one step away from setting up your one-stop shop!</h6>
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
                        <div className="input-field col s6 offset-s3">
                            <i className="material-icons prefix">location_city</i>
                            <Inputs
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                id="icon_prefix"
                                name="address"
                            />
                            <label for="icon_prefix">Address</label>
                        </div>
                    <Row>
                        <div className="input-field col s6 offset-s3">
                            <i className="material-icons prefix">event_note</i>
                            <Inputs
                                value={this.state.storeName}
                                onChange={this.handleInputChange}
                                id="icon_prefix"
                                name="storeName"
                            />
                            <label for="icon_prefix">Company Name</label>
                        </div>
                    </Row>
                    <Row>
                        <div className="input-field col s6 offset-s3">
                            <i className="material-icons prefix">picture_in_picture</i>
                            <Inputs
                                value={this.state.picture}
                                onChange={this.handleInputChange}
                                id="icon_prefix"
                                name="picture"
                            />
                            <label for="icon_prefix">Store-front or Location Picture</label>
                        </div>
                    </Row>
                    <Row>
                        <Button className= "col s6 offset-s3 green lighten-1" waves='light'>Create Account<Icon right>send</Icon></Button>
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

export default SignUp;
