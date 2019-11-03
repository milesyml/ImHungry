import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

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
      <Router>
        <div>
          <Header login={this.login} user={this.state.user}/>
          <div className="container main-content">
            <div className="row">
              <div className="col-md-12" style={{ paddingTop: "70px" }}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/restaurants" component={Restaurants} />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
