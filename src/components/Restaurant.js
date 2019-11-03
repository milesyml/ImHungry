import React from "react";
import Placeholder from "../images/res_placeholder.png";
import ViewRestaurantButton from "./ViewRestaurantButton.js";
import "../App.css";

const Restaurant = ({ name, address, categories }) => {
  const cats = [];

  categories.split(";").forEach((c, i) => {
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
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body">
        <img
          style={{ float: "left", width: "200px" }}
          src={Placeholder}
          alt="Card image cap"
          className="desktop-only"
        />
        <h5 className="card-title">{name}</h5>
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
        <ViewRestaurantButton
          name={name}
          address={address}
          categories={categories}
        />
      </div>
    </div>
  );
};
export default Restaurant;
