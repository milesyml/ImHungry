import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./containers/Home.js";
import Restaurants from "./containers/Restaurants.js";

import Alice from "./secret/alice.js";
import Bob from "./secret/bob.js";
import Candy from "./secret/candy.js";
import Default from "./secret/default.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      restaurants: Default.restaurants
    };
    this.login = this.login.bind(this);
  }

  login(user) {
    // Once user logs in, we straight away update the restaurants
    var r;
    if (user == "Alice") {
      r = Alice.restaurants;
    } else if (user == "Bob") {
      r = Bob.restaurants;
    } else if (user == "Candy") {
      r = Candy.restaurants;
    } else {
      // Default
      r = Default.restaurants;
    }
    this.setState({
      user: user,
      restaurants: r
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
                    render={() => (
                      <Home
                        user={this.state.user}
                        restaurants={this.state.restaurants}
                      />
                    )}
                  />
                  <Route
                    path="/restaurants"
                    render={() => (
                      <Restaurants
                        user={this.state.user}
                        restaurants={this.state.restaurants}
                      />
                    )}
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
