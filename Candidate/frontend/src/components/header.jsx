import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="myheader">
          <img src="internity.jpg" alt="" />
          <h1>Internity Application</h1>
          <div className="mylist">
            <ul className="standard-nav visible-lg">
              <li>
                <Link to="/" id="portfolio-linker" className="scroll">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" id="portfolio-linker" className="scroll">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/" id="mycontact" className="scroll">
                  Contact Us
                </Link>
              </li>
              <Link to="/Login" className="scroll">
                Login
              </Link>
            </ul>
          </div>
          <hr />
        </div>
      </header>
    );
  }
}

export default Header;
