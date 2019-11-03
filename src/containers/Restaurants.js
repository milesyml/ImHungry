import React from "react";
import Restaurant from "../components/Restaurant.js";
import Alice from "../secret/alice.js";
import Bob from "../secret/bob.js";
import Default from "../secret/default.js";

const Restaurants = props => {
  const restaurants = [];
  const user = props.user;

  if (user == "Alice") {
    Alice.restaurants.forEach(r => {
      const rest = (
        <Restaurant
          name={r.name}
          address={r.address}
          categories={r.categories}
        />
      );
      restaurants.push(rest);
    });
  } else if (user == "Bob") {
    Bob.restaurants.forEach(r => {
      const rest = (
        <Restaurant
          name={r.name}
          address={r.address}
          categories={r.categories}
        />
      );
      restaurants.push(rest);
    });
  } else {
    Default.restaurants.forEach(r => {
      const rest = (
        <Restaurant
          name={r.name}
          address={r.address}
          categories={r.categories}
        />
      );
      restaurants.push(rest);
    });
  }

  return (
    <div>
      <h3>Restaurants</h3>
      <div className="row">{restaurants}</div>
    </div>
  );
};

export default Restaurants;
