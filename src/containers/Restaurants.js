import React from "react";
import Restaurant from "../components/Restaurant.js";

const Restaurants = props => {
  const restaurants = [];
  console.log("In Restaurants.js, user: " + props.user);
  console.log(
    "In Restaurants.js, number of restaurants in props: " +
      props.restaurants.length
  );
  props.restaurants.forEach((r, i) => {
    const rest = (
      <Restaurant
        key={i}
        name={r.name}
        address={r.address}
        categories={r.categories}
      />
    );
    restaurants.push(rest);
  });

  return (
    <div>
      <h3>Restaurants</h3>
      <div className="row">{restaurants}</div>
    </div>
  );
};

export default Restaurants;
