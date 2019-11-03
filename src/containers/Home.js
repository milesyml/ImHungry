import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Placeholder from "../images/res_placeholder.png";
import RestaurantView from "../components/RestaurantView";
import Bob from "../secret/bob.js";
import Alice from "../secret/alice.js";
import Default from "../secret/default.js";

const USE_API = false;

const alice_id = "wm97KC6G0resSDXTmNIMKw";
const bob_id = "oH9K7eCuNsYr6MmlM2ZjUg";
const candy_id = "bzMzZE3OCqHhZyXH5JRaWw";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      restaurants: this.props.restaurants,
      user: this.props.user,
      chosen: this.getRandomRestaurant(this.props.restaurants)
    };
    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(props) {
    console.log("In Home.js, will receive props...");
    console.log("Logged in to: ", props.user)
    this.setState({
      user: props.user,
      restaurants: props.restaurants
    });
  }

  toggle() {
    const { modal } = this.state;

    this.setState({
      modal: !modal
    });

    // IF opening modal, then fetch and randomise
    if (!modal) {
      this.setState({
        chosen: this.getRandomRestaurant(this.state.restaurants)
      });
    }
  }

  // Give you array of restaurants
  getRestaurants(user) {
    if (USE_API) {
      // console.log("In Home.js, using API to getRestaurants...");
      // if (user == "Alice" || user == "Bob" || user == "Candy") {
      //   var id = "";
      //   if (user == "Alice") {
      //     id = alice_id;
      //   } else if (user == "Bob") {
      //     id = bob_id;
      //   } else if (user == "Candy") {
      //     id = candy_id;
      //   }

      //   return fetch(
      //     "https://cors-anywhere.herokuapp.com/http://jy-ftp.southeastasia.cloudapp.azure.com/web/predict/" +
      //       id,
      //     {
      //       headers: {
      //         Origin: "null"
      //       }
      //     }
      //   )
      //     .then(response => response.json())
      //     .then(responseData => {
      //       return responseData;
      //     });
      // } else {
      //   return Default.restaurants;
      // }
    } else {
      console.log("In Home.js, NOT using API to getRestaurants...");

      if (user == "Alice") {
        return Alice.restaurants;
      } else if (user == "Bob") {
        return Bob.restaurants;
      } else if (user == "Candy") {
        return Default.restaurants;
      } else {
        // Default
        return Default.restaurants;
      }
    }
  }

  getRandomRestaurant(restaurants) {
    console.log("In Home.js, getting random restaurant...");
    const chosen = restaurants[
      Math.floor(Math.random() * restaurants.length)
    ];
    return chosen;
  }

  render() {
    const { modal } = this.state;
    const { className } = this.props;
    return (
      <div>
        <h1 className="display-4">What are you going to eat today?</h1>

        <div>
          <button
            type="button"
            className="btn btn-success btn-lg"
            style={{
              margin: "10px",
              minWidth: "100%",
              minHeight: "300px",
              backgroundImage:
                "url(https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            onClick={this.toggle}
          >
            <span
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "20px",
                fontWeight: "900",
                fontSize: "24px"
              }}
            >
              I'M FEELING HUNGRY
            </span>
          </button>
          <Modal
            isOpen={modal}
            toggle={this.toggle}
            className={className + " modal-lg"}
          >
            <ModalHeader toggle={this.toggle}>
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: "50px" }}
                  src={Placeholder}
                  alt="Card image cap"
                  className="desktop-only"
                />
                <div style={{ marginLeft: "50px", lineHeight: "50px" }}>
                  {this.state.chosen.name}
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              <RestaurantView
                address={this.state.chosen.address}
                categories={this.state.chosen.categories}
              />
            </ModalBody>
            <div
              className="modal-footer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between"
              }}
            >
              <label style={{ fontWeight: "bold" }}>Book now:</label>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "40% 60%",
                  margin: "10px",
                  gridRowGap: "10px"
                }}
              >
                <label>No. of people:</label>
                <input
                  type="number"
                  className="form-control"
                  id="booking-pax"
                />
                <label>Date:</label>
                <input type="date" className="form-control" id="booking-pax" />
                <label>Time</label>
                <input type="time" className="form-control" id="booking-pax" />
              </div>
              <button type="button" className="btn btn-success">
                Book
              </button>
            </div>
          </Modal>
        </div>
        <NavLink to="restaurants">
          <button
            type="button"
            className="btn btn-light"
            style={{ margin: "10px" }}
          >
            Show nearby restaurants
          </button>
        </NavLink>
        <hr />
      </div>
    );
  }
}

export default Home;
