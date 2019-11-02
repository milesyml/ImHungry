import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Placeholder from "../images/res_placeholder.png";
import RestaurantView from "../components/RestaurantView";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  }

  render() {
    const { modal } = this.state;
    const { className } = this.props;
    return (
      <div>
        <h1 className="display-4">What are you going to eat today?</h1>

        <NavLink to="restaurants">
          <button
            type="button"
            className="btn btn-success"
            style={{ margin: "10px" }}
          >
            Show nearby restaurants
          </button>
        </NavLink>

        <div>
          <button
            type="button"
            className="btn btn-success"
            style={{ margin: "10px" }}
            onClick={this.toggle}
          >
            I'm feeling hungry
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
                />
                <div style={{ marginLeft: "50px", lineHeight: "50px" }}>
                  Brew Tea Bar
                </div>
              </div>
            </ModalHeader>
            <ModalBody>
              <RestaurantView
                address="7380 S Rainbow Blvd, Ste 101"
                categories="Cafes;Tea Rooms;Food;Bubble Tea;Restaurants;Desserts"
              />
            </ModalBody>
            <div
              class="modal-footer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between"
              }}
            >
              <label style={{ fontWeight: "bold" }} for="footer">
                Book now:
              </label>
              <div style={{ display: "flex", margin: "5px 0" }}>
                Number of people:
                <input type="number" class="form-control" id="booking-pax" />
              </div>
              <div style={{ display: "flex", margin: "5px 0" }}>
                Date:
                <input type="date" class="form-control" id="booking-pax" />
              </div>
              <div style={{ display: "flex", margin: "5px 0" }}>
                Time:
                <input type="time" class="form-control" id="booking-pax" />
              </div>
              <button type="button" class="btn btn-success">
                Book
              </button>
            </div>
          </Modal>
        </div>
        <hr />
      </div>
    );
  }
}

export default Home;
