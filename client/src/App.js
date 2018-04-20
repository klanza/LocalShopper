import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Index';
// import Products from "./pages/Products";
import NoMatch from './pages/NoMatch';
import LoginForm from './components/Login/LoginForm';
import SignUp from './pages/SignUp';

import logo from './logo.svg';
import './App.css';

const App = () => (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    );

export default App;
