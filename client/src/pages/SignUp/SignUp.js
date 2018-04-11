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
    products:[],
    searchTerm: ""
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
        <Container>
            <Nav/>
            <div class="row">
                <form class="col s12">
                        <Row>
                            <div class="input-field col s6 offset-s3">
                                <i class="material-icons prefix">assignment_ind</i>
                                <input id="icon_prefix" type="text" class="validate"></input>
                                <label for="icon_prefix">E-mail</label>
                            </div>
                       </Row>
                </form>
            </div>
            <Footer>
            </Footer>
        </Container>
    );
  }
}

export default Home;
