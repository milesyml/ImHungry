import React from 'react';

const RestaurantView = (props) => (
  <div>
    <label style={{ fontWeight: 'bold' }} for="res-cuisine">
      Categories:
    </label>
    <p>{props.categories}</p>

    <label style={{ fontWeight: 'bold' }} for="res-cuisine">
      Menu:
    </label>
    <div>
      <button
        type="button"
        className="btn btn-primary"
        style={{ margin: '0 10px 10px 0' }}>
        Food Menu
      </button>
      <button
        type="button"
        className="btn btn-primary"
        style={{ margin: '0 10px 10px 0' }}>
        Drinks Menu
      </button>
    </div>

    <label style={{ fontWeight: 'bold' }} for="res-cuisine">
      Opening hours:
    </label>
    <p>Mon-Tue: 5-11pm</p>

    <label style={{ fontWeight: 'bold' }} for="res-cuisine">
      Address:
    </label>
    <div style={{ display: 'flex' }}>
      <div style={{lineHeight:"38px", marginRight:"10px"}}>{props.address}</div>
      <button
        type="button"
        className="btn btn-primary"
        style={{ margin: '0 10px 10px 0' }}>
        View on map
      </button>
    </div>
  </div>
);

export default RestaurantView;
