import React from "react";
import Placeholder from "../images/res_placeholder.png";
import ViewRestaurantButton from "./ViewRestaurantButton.js";

const Restaurant = ({ name, address, categories }) => (
  <div class="card" style={{ width: "100%" }}>
    <div class="card-body">
      <img
        style={{ float: "left", width: "200px" }}
        src={Placeholder}
        alt="Card image cap"
      />
      <h5 class="card-title">{name}</h5>
      <p class="card-text">{categories}</p>
      <ViewRestaurantButton name={name} address={address} categories={categories}/>
    </div>
  </div>
);

export default Restaurant;
