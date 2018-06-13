import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <Link to="/" >
            Home
          </Link>
          <Link to="/groups" >
            Groups
          </Link>
          <Link to="/fixtures" >
            Fixtures
          </Link>
          <Link to="/knockout" >
            Knockout Stage
          </Link>
          <h3 className="title">World Cup 2018 <span>Russia</span></h3>
        </nav>

        <section className="pushdownBlock" />
      </div>
    );
  }
}

export default Header;
