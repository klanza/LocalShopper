import React, { Component } from "react";
import {Inputs, SearchButton} from "../../components/Input"
//import {DeleteBtn,SaveBtn} from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, FormBtn } from "../../components/Form";

const productSeed = [
  {
    productName: 'Apollo Athletics S-HAMMER-20 Steel Sledge Hammer - 20 lbs',
    sku: 'APLA083',
    upc: null,
    serialNumber: 'S-Hammer-20',
    price: 45.81,
    seller: 0,
    keywords: ['hammer', 'big hammer', 'slege hammer', '20lb sledge', 'sledge'],
  },
  {
    productName: 'ABC Hammers ABC14DB Polyurethane Dead Blow Hammer, 12-Pound',
    sku: null,
    upc: null,
    serialNumber: 'abc14db',
    price: 146.16,
    seller: 0,
    keywords: ['hammer', 'big hammer', 'dead blow', '12lb', 'sledge', '14lb'],
  },
  {
    productName: 'Lisle Water Pump Sprocket Holders 13800',
    sku: null,
    upc: '083045138006',
    serialNumber: 'LIL-13800',
    price: 26.97,
    seller: 0,
    keywords: ['water pump tool', 'water pump', 'ecotec', '2.2l', '2.4l', 'GM', 'Chevy'],
  },
  {
    productName: 'Plantronics Backbeat Fit Bluetooth Headphones',
    sku: null,
    upc: '017229157354',
    serialNumber: '49166404',
    price: 84.99,
    seller: 1,
    keywords: ['bluetooth headphones', 'sport headphones', 'Pantronics', 'Backbeat Fit'],
  },
  {
    productName: 'Plantron BackBeat GO 3 Wireless Earbuds with Charging Case',
    sku: '9092917',
    upc: '017229152540',
    serialNumber: '204353-01',
    price: 89.99,
    seller: 1,
    keywords: ['bluetooth headphones', 'sport headphones', 'Pantronics', 'Backbeat Go', 'earbuds', 'bluetooth earbuds'],
  },
  {
    productName: 'Yamaha F325D Acoustic Guitar',
    sku: null,
    upc: null,
    serialNumber: 'F325D',
    price: 149.99,
    seller: 2,
    keywords: ['guitar', 'acoustic', 'instrument'],
  },
  {
    productName: 'Rogue Travel / Starter Banjo',
    sku: 511195,
    upc: null,
    serialNumber: null,
    price: 119.99,
    seller: 2,
    keywords: ['banjo', 'beginner', 'instrument'],
  },
  {
    productName: 'Lisle STRETCH BELT REMOVER/INSTALLER 59370',
    sku: null,
    upc: '0083045593706',
    serialNumber: '59370 LIS LP',
    price: 21.33,
    seller: 0,
    keywords: ['pulley', 'belt tool', 'belt remover', 'strech belt tool', 'strech belt'],
  },
  {
    productName: 'BMW A/C Belt Installer - CTA 3458',
    sku: null,
    upc: null,
    serialNumber: '83300494518',
    price: 24.39,
    seller: 0,
    keywords: ['pulley', 'belt tool', 'belt remover', 'strech belt tool', 'strech belt', 'BMW'],
  },
];


const userSeed = [

{
  _id: 0,
  username: 'darwood',
  password: 'super secret password',
  address: '123 E. Fake St.',
  picture: null,
  storeName: 'The Junk Pile',
  mapLng: null,
  mapLong: null,
  storeHours: [],
},
{
  _id: 1,
  username: 'Kenny',
  password: 'super secret password',
  address: '435 E. Fake St.',
  picture: null,
  storeName: 'The Better Pile',
  mapLng: null,
  mapLong: null,
  storeHours: [],
},
{
  _id: 2,
  username: 'Jan',
  password: 'super secret password',
  address: '543 E. Fake Rd.',
  picture: null,
  storeName: 'Emporium Unlimited',
  mapLng: null,
  mapLong: null,
  storeHours: [],
},
];


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
          .then(res => console.log(res))
          .catch(err => console.log(err));
  }
};

  render() {
    const styles = {
      transform: `translateX(${-105}%)`
    };

    var copy = (
      <div>
        <nav className="green lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a id="logo-container" href="#" className="brand-logo"><i class="material-icons left">search shopping_basket</i></a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#">Login</a>
              </li>
            </ul>

            <ul id="nav-mobile" className="sidenav" style={styles}>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>

        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br />
            <br />
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
              <div className="col s4">
              </div>
            </div>
          </div>

        </div>


        <div className="container">
          <div className="section">


            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">
                    <i className="material-icons">flash_on</i>
                  </h2>
                  <h5 className="center">Why wait for shipping?</h5>

                  <p className="light center">Buy it today!</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">
                    <i className="material-icons">group</i>
                  </h2>
                  <h5 className="center">Support local businesses!</h5>

                  <p className="light center">Leave your money where you make your money.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text">
                    <i className="material-icons">settings</i>
                  </h2>
                  <h5 className="center">Screw you Amazon!</h5>

                  <p className="light center">Isn't Amazon big enough?.</p>
                </div>
              </div>
            </div>

          </div>
          <br />
          <br />
        </div>

        <footer className="page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4"> We are a team of engineers hoping to create a solution
                for those who desire to shop locally while empowering small businesses in this competitive market.</p>


              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li>
                    <a className="white-text" href="#!">Account</a>
                  </li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li>
                    <a className="white-text" href="#!">Link 1</a>
                  </li>
                  <li>
                    <a className="white-text" href="#!">Link 2</a>
                  </li>
                  <li>
                    <a className="white-text" href="#!">Link 3</a>
                  </li>
                  <li>
                    <a className="white-text" href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize"</a>
            </div>
          </div>
        </footer>

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
