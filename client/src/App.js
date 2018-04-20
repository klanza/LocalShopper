import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Index';
// import Products from "./pages/Products";
import NoMatch from './pages/NoMatch';
import LoginForm from './components/Login/LoginForm';
import SignUp from './pages/SignUp';
import Products from './pages/Products';

// import logo from './logo.svg';
// import './App.css';

const App = () => (

  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={Products} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  </Router>
);

export default App;
