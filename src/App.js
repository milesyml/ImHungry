import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from 'react-router-dom'

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./containers/Home.js";
import Restaurants from "./containers/Restaurants.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
    this.login = this.login.bind(this);
  }

  login(user) {
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Header login={this.login} user={this.state.user} />
          <div className="container main-content">
            <div className="row">
              <div className="col-md-12" style={{ paddingTop: "70px" }}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Home user={this.state.user} />}
                  />
                  <Route
                    path="/restaurants"
                    render={() => <Restaurants user={this.state.user} />}
                  />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
