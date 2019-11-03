import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Placeholder from "../images/res_placeholder.png";
import RestaurantView from "./RestaurantView";
import "../App.css";


class ViewRestaurantButton extends Component {
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.toggle}
          style={{ margin: "5px 5px" }}
        >
          View Restaurant
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
                {this.props.name}
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <RestaurantView
              address={this.props.address}
              categories={this.props.categories}
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
            <label style={{ fontWeight: "bold" }}>
              Book now:
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "40% 60%", margin: "10px", gridRowGap: "10px"}}>
              <label>No. of people:</label>
              <input type="number" className="form-control" id="booking-pax" />
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
    );
  }
}

export default ViewRestaurantButton;
