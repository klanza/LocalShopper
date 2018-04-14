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
import { List, ListItem } from "../../components/List";
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
      console.log(searchTerm);
      window.location = '/products/'+searchTerm;
      //source:https://stackoverflow.com/questions/28250103/react-how-to-navigate-via-clickhandlers
  //    
  }
};

  render() {
    const styles = {
      transform: `translateX(${-105}%)`
    };

    var copy = (
      <div>
        <Nav/>

        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
           
            <h1 className="header center orange-text">Local Shopper</h1>
            <div className="row center">
              <h5 className="header col s12 light">Find products locally!</h5>
            </div>
            <div className="row center">

              <div className="col s4">
              </div>
              {/* <div className="input-field col s4">
                <input placeholder="Search" id="search" type="text" className="validate" />
                <label htmlFor="search"></label>

              </div> */}
                <div className="input-field col s4">
                  <Inputs 
                    value={this.state.searchTerm}
                    onChange={this.handleInputChange}
                    name="searchTerm"
                    placeholder="Enter search terms here..."
                  />
                  <SearchButton 
                    onClick={this.handleFormSubmit}
                  >
                  </SearchButton>
                </div>
                {/*// <List>
                // {this.state.products.map(product => (
                // <ListItem key={product._id}>
                    // <Link to={"/products" }>
                    //   <strong>
                    //     {product.price} {product.serialNumber}
                    //   </strong>
                    // </Link>
              //     </ListItem>
              //   ))}
              // </List>*/}
              <div className="col s4">
              </div>
            </div>
          </div>

        </div>

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
