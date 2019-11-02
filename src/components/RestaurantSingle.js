const RestaurantSingle = (props) => {
  <Modal
    isOpen={modal}
    toggle={props.toggle}
    className={className + " modal-lg"}
  >
    <ModalHeader toggle={this.toggle}>
      <div style={{ display: "flex" }}>
        <img style={{ width: "50px" }} src={Placeholder} alt="Card image cap" />
        <div style={{ marginLeft: "50px", lineHeight: "50px" }}>
          {props.name}
        </div>
      </div>
    </ModalHeader>
    <ModalBody>
      <RestaurantView
        address={props.address}
        categories={props.categories}
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
  </Modal>;
};
