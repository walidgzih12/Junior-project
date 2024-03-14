import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="mobile-menu">
        <i className="fa fa-bars fa-3x js-menu-icon"></i>
      </div>
      <nav className="navbar js-navbar">
        <ul className="menu">
          <li>
            <a className="hasDropdown" href="#!">Electronics <i className="fa fa-angle-down"></i></a>
            <ul className="container">
              <div className="container__list">
                <div className="container__listItem">
                  <div>Televisions</div>
                </div>
                <div className="container__listItem">
                  <div>informatique</div>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <a className="hasDropdown" href="#">clothes <i className="fa fa-angle-down"></i></a>
            <ul className="container has-multi">
              <div className="container__list container__list-multi">
                <div className="container__listItem">
                  <div>man</div>
                </div>
                <div className="container__listItem">
                  <div>woman</div>
                </div>
                <div className="container__listItem">
                  <div>kids</div>
                </div>
              </div>
            </ul>
          </li>
          <li><a href="#">cars</a></li>
          <li><a href="#">home</a></li>
          <li><a href="#">shopping</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
