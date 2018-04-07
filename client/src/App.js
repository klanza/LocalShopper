import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Index";
import Products from "./pages/Products";
import NoMatch from "./pages/NoMatch";

import logo from './logo.svg';
import './App.css';


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
