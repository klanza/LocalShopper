import React, { Component } from "react";
import {Inputs, SearchButton} from "../../components/Input"
//import {DeleteBtn,SaveBtn} from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Segment from "../../components/Segment";
import { Link } from "react-router-dom";
import { Col, Row, Container} from "../../components/Grid";
//import { Input, FormBtn } from "../../components/Form";

class Home extends Component {

  state = {
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

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.searchTerm) {
      let searchTerm = this.state.searchTerm
      console.log(searchTerm)
      API.getAllProduct()
          .then(res => this.setState({ products: res.data, search: ""})
  )
          .catch(err => console.log(err))
  }
};

  render() {
    const styles = {
      transform: `translateX(${-105}%)`
    };
    return (
        <div>
        <Nav>
        </Nav>
        <Container>

            <Row>
                <div className="col s6 offset-s2">
                    <h4 className="">Create your account!</h4>
                    <h6>You're one step away from setting up your one-stop shop!</h6>
                </div>
            </Row>
            <Row>
                <form className="col s12">
                    <Row>
                        <div className="input-field col s6 offset-s3">
                            <i className="material-icons prefix">assignment_ind</i>
                            <input id="icon_prefix" type="text" className="validate"></input>
                            <label for="icon_prefix">E-mail</label>
                        </div>
                    </Row>
                    <Row>
                        <div className="input-field col s6 offset-s3">
                            <i className="material-icons prefix">lock</i>
                            <input id="icon_prefix" type="text" className="validate"></input>
                            <label for="icon_prefix">Password</label>
                        </div>
                    </Row>
                        <div className="input-field col s6 offset-s3">
                            <i className="material-icons prefix">location_city</i>
                            <input id="icon_prefix" type="text" className="validate"></input>
                            <label for="icon_prefix">Address</label>
                        </div>
                    <Row>
                        <div className="input-field col s6 offset-s3">
                            <i className="material-icons prefix">event_note</i>
                            <input id="icon_prefix" type="text" className="validate"></input>
                            <label for="icon_prefix">Company Name</label>
                        </div>
                    </Row>
                    <Row>
                        <div className="input-field col s6 offset-s3">
                            <i className="material-icons prefix">picture_in_picture</i>
                            <input id="icon_prefix" type="text" className="validate"></input>
                            <label for="icon_prefix">Store-front or Location Picture</label>
                        </div>
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

export default Home;
