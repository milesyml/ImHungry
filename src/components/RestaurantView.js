import React from "react";

const RestaurantView = props => {
  const cats = [];

  props.categories.split(";").forEach((c, i) => {
    cats.push(
      <span
        key={i}
        style={{ margin: "5px 5px", padding: "8px" }}
        className="badge badge-secondary"
      >
        {c}
      </span>
    );
  });

  return (
    <div>
      <label style={{ fontWeight: "bold" }}>Categories:</label>
      <div
        style={{
          marginBottom: ".5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          fontSize: "18px"
        }}
      >
        {cats}
      </div>

      <label style={{ fontWeight: "bold" }}>Menu:</label>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: "0 10px 10px 0" }}
        >
          Food Menu
        </button>
        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: "0 10px 10px 0" }}
        >
          Drinks Menu
        </button>
      </div>

      <label style={{ fontWeight: "bold" }}>Opening hours:</label>
      <p>Mon-Tue: 5-11pm</p>

      <label style={{ fontWeight: "bold" }}>Address:</label>
      <div style={{ display: "flex" }}>
        <div style={{ lineHeight: "38px", marginRight: "10px" }}>
          {props.address}
        </div>
        <button
          type="button"
          className="btn btn-info"
          style={{ margin: "0 10px 10px 0" }}
        >
          View on map
        </button>
      </div>
    </div>
  );
};

export default RestaurantView;
