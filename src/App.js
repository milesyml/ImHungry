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

const USE_API = true;
const alice_id = "wm97KC6G0resSDXTmNIMKw";
const bob_id = "oH9K7eCuNsYr6MmlM2ZjUg";
const candy_id = "bzMzZE3OCqHhZyXH5JRaWw";

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
    return new Promise((resolve, reject) => {
      this.getRestaurants(user).then(r => {
        this.setState({
          user: user,
          restaurants: r
        });
        resolve()
      });
    })
  }

  // Returns a promised array of restaurants
  getRestaurants(user) {
    if (USE_API) {
      console.log("USING API TO GET RESTAURANTS")
      var id = "";
      if (user == "Alice") {
        id = alice_id;
      } else if (user == "Bob") {
        id = bob_id;
      } else {
        id = candy_id;
      }

      return fetch(
        "https://cors-anywhere.herokuapp.com/http://jy-ftp.southeastasia.cloudapp.azure.com/web/predict/" +
          id,
        {
          headers: {
            Origin: "null"
          }
        }
      )
        .then(response => response.json())
        .then(responseData => {
          const restaurants = responseData.restaurants;
          restaurants.forEach(r => {
            r.name = r.name.replace(/"/g, "")
            r.address = r.address.replace(/"/g, "")
          })
          return restaurants;
        });
    } else {
      console.log("NOT USING API TO GET RESTAURANTS")
      if (user == "Alice") {
        return new Promise((resolve, reject) => {
          resolve(Alice.restaurants);
        });
      } else if (user == "Bob") {
        return new Promise((resolve, reject) => {
          resolve(Bob.restaurants);
        });
      } else if (user == "Candy") {
        return new Promise((resolve, reject) => {
          resolve(Candy.restaurants);
        });
      } else {
        // Default
        return new Promise((resolve, reject) => {
          resolve(Default.restaurants);
        });
      }
    }
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
