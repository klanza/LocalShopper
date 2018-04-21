import React from 'react';

const Nav = () => (
  <nav className="green lighten-1">
    <div className="nav-wrapper container">
      <a id="logo-container" href="/" className="brand-logo">Local Shopper</a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/SignUp">Sign Up?</a>
        </li>
        <li>
          <a href="/SignIn">Sign In!</a>
        </li>
        <li>
          <a href="/api/users/logout">Logout</a>
        </li>
      </ul>

      <ul id="nav-mobile" className="sidenav">
        <li>
          <a href="/SignUp">Sign Up?</a>
        </li>
        <li>
          <a href="/SignIn">Sign In!</a>
        </li>
      </ul>
      <a href="#" data-target="nav-mobile" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </div>
  </nav>
);

export default Nav;
