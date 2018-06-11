import React, { Component } from 'react';
import './App.css';
import Header from './Layout/Header.js';
import Main from './Sections/Main.js';
import Groups from './Sections/Groups.js';
import Dates from './Sections/Dates.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dates />
      </div>
    );
  }
}

export default App;
