import React, { Component } from "react";
import {Inputs, SearchButton} from "../../components/Input"
//import {DeleteBtn,SaveBtn} from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Segment from "../../components/Segment";
import { Link } from "react-router-dom";
import { Col, Row } from "../../components/Grid";
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

    var copy = (
      <div>
        <Nav/>
        <Segment>
       </Segment>
        <Footer>
        </Footer>
      </div>

    );
    return (
      <div>
        {
          copy
        }
      </div>
    );
  }
}

export default Home;
