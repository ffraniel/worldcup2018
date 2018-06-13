import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Layout/Header.js";
import Main from "./Sections/Main.js";
import Groups from "./Sections/Groups.js";
import Dates from "./Sections/Dates.js";
import Knockout from "./Sections/Knockout.js";
import Group from "./Sections/Group.js";

class App extends Component {
  render() {
    return (
        <Router className="App">
          <section>
            <Header />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/groups" component={Groups} />
              <Route path="/fixtures" component={Dates} />
              <Route path="/knockout" component={Knockout} />
              <Route path="/groups/:groupLetter" component={Group} />
            </Switch>
          </section>
        </Router>
    );
  }
}

export default App;
