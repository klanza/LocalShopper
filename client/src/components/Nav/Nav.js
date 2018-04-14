import React from "react";

const Nav = () => (
  <nav className="green lighten-1" role="navigation">
    <div className="nav-wrapper container">
      <a id="logo-container" href="#" className="brand-logo">Logo</a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="#">Login</a>
        </li>
      </ul>

      <ul id="nav-mobile" className="sidenav">
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <a href="#" data-target="nav-mobile" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </div>
     </nav>
);

export default Nav;
