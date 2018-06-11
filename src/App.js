import React, { Component } from 'react';
import './App.css';
import Header from './Layout/Header.js';
import Main from './Sections/Main.js';
import Groups from './Sections/Groups.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Groups />
      </div>
    );
  }
}

export default App;
