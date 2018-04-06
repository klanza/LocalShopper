import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
