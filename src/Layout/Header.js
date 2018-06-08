import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav>
            <a href="#'">Home</a>
            <a href="#'">Group</a>
            <a href="#'">Dates</a>
            <a href="#'">Knockout Stages</a>
            <h3></h3>
            <h3 className="title">World Cup 2018 <span>Russia</span></h3>
        </nav>

        <section className="pushdownBlock"></section>
      </div>
    );
  }
}

export default Header;
