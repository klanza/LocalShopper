import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Index';
// import Products from "./pages/Products";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Products from "./pages/Products";
import User from "./pages/User";
import Upload from "./pages/Upload";
import logo from './logo.svg';
import './App.css';
// import logo from './logo.svg';
// import './App.css';


const App = () => (

  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products/:id" component={Products}/>
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/User" component={User} />
        <Route exact path="/upload1/:id" component={Upload}/>
        {/* <Route exact path="/" component={Products} /> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
