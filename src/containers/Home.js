import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Placeholder from "../images/res_placeholder.png";
import RestaurantView from "../components/RestaurantView";
import Bob from "../secret/bob.js";
import Alice from "../secret/alice.js";
import Default from "../secret/default.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      user: ""
    };
    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      user: props.user
    });
  }

  toggle() {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  }

  randomise(user) {
    const restaurants = [];

    if (user == "Alice") {
      Alice.restaurants.forEach(r => {
        restaurants.push(r);
      });
    } else if (user == "Bob") {
      Bob.restaurants.forEach(r => {
        restaurants.push(r);
      });
    } else {
      Default.restaurants.forEach(r => {
        restaurants.push(r);
      });
    }

    const chosen = restaurants[Math.floor(Math.random() * restaurants.length)];

    return chosen;
  }

  render() {
    const { modal } = this.state;
    const { className } = this.props;
    const chosen = this.randomise(this.state.user);
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
                  {chosen.name}
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              <RestaurantView
                address={chosen.address}
                categories={chosen.categories}
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
                <input type="number" class="form-control" id="booking-pax" />
                <label>Date:</label>
                <input type="date" class="form-control" id="booking-pax" />
                <label>Time</label>
                <input type="time" class="form-control" id="booking-pax" />
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
