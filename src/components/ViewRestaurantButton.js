import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Placeholder from '../images/res_placeholder.png';
import RestaurantView from './RestaurantView';

class ViewRestaurantButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const { modal } = this.state;
    const { className } = this.props;
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggle}>
          View Restaurant
        </button>
        <Modal
          isOpen={modal}
          toggle={this.toggle}
          className={className + ' modal-lg'}>
          <ModalHeader toggle={this.toggle}>
            <div style={{ display: 'flex' }}>
              <img
                style={{ width: '50px' }}
                src={Placeholder}
                alt="Card image cap"
              />
              <div style={{ marginLeft: '50px', lineHeight: '50px' }}>
                {this.props.name}
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <RestaurantView address={this.props.address} categories={this.props.categories}/>
          </ModalBody>
          <div
            class="modal-footer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <label style={{ fontWeight: 'bold' }} for="footer">
              Book now:
            </label>
            <div style={{ display: 'flex', margin: "5px 0"}}>
              Number of people:
              <input type="number" class="form-control" id="booking-pax" />
            </div>
            <div style={{ display: 'flex', margin: "5px 0"}}>
              Date:
              <input type="date" class="form-control" id="booking-pax" />
            </div>
            <div style={{ display: 'flex', margin: "5px 0"}}>
              Time:
              <input type="time" class="form-control" id="booking-pax" />
            </div>

            <button type="button" class="btn btn-success">
              Book
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ViewRestaurantButton;
