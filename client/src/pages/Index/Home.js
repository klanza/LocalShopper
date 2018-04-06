import React, { Component } from "react";
//import {DeleteBtn,SaveBtn} from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
//import API from "../../utils/API";
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, FormBtn } from "../../components/Form";

class Home extends Component {
  
 

  state = {
     // articles:[],
     // topic : "",

     // start : "",
     // end : "",
     // savedArticles: []  
  };
  
  
// componentDidMount() {
//     this.loadArticles();
//   }

//   loadArticles = () => {
//     API.getArticles()
//       .then(res => {
//         console.log(res,res.data);
//         this.setState({
//           savedArticles: res.data
//         })
//         //console.log(savedArticles);
//       })
//       .catch(err => console.log(err));
//   };


//   saveArticles = article => {
//     //pass the object containg all  info related to article to create article in DB /show up in front end

//     API.saveArticles({
//       title: article.title,
//       url: article.url,
//       date: article.date,
//     })
//       .then(res => this.loadArticles())
//       .catch(err => console.log(err));
//   };

//   deleteArticles = id => {
//     API.deleteArticles(id)
//       .then(res => this.loadArticles())
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     console.log(this.state.topic,this.state.start,this.state.end);
//     // if (this.state.topic) {
//       API.getNYTArticles(this.state.topic,this.state.start,this.state.end)
//       .then((NYTdata) => {
//                let responses = [];

//                 for (var i = 0; i < 5; i++) {
//                     var doc = NYTdata.data.response.docs[i];
                   
//                     var article = {
//                         title: doc.headline.main,
//                         url: doc.web_url,
//                         date: doc.pub_date.split('T')[0],
                        
//                     };

//                     responses.push(article);
//                 }
//                 console.log(responses);
               


//change state of articles to response from api
  //       this.setState({articles: responses, topic:"",start:"",end:""}),
  //       console.log(this.state.articles, this.state.topic)
  //     })
        
  //       .catch(err => console.log(err));
  //   // }
  // };

  render() {
    const styles = { 
        transform: `translateX(${-105}%)` 
    };

    var copy=(
<div>
 <nav className="green lighten-1" role="navigation">
    <div className="nav-wrapper container">
      <a id="logo-container" href="#" className="brand-logo">Logo</a>
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
      <br/>
      <br/>
      <h1 className="header center orange-text">Local Shopper</h1>
      <div className="row center">
        <h5 className="header col s12 light">Find products locally!</h5>
      </div>
      <div className="row center">

        <div className="col s4">
        </div>
        <div className="input-field col s4">
          <input placeholder="Search" id="search" type="text" className="validate"/>
          <label htmlFor="search"></label>
          
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
    <br/>
    <br/>
  </div>

  <footer className="page-footer orange">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Company Bio</h5>
          <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support
            and continue development on this project and is greatly appreciated.</p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Settings</h5>
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
        Made by
        <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize"</a>
      </div>
    </div>
  </footer>
    
</div>
     
  );
    return (
  <div>
            {copy}
        </div>  
    );
  }
}

export default Home;
