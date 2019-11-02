import React from "react";
import Restaurant from "../components/Restaurant.js";

const Restaurants = () => (
  <div>
    <h3>Restaurants</h3>
    <div className="row">
      <Restaurant
        name="Brew Tea Bar"
        address="7380 S Rainbow Blvd, Ste 101"
        categories="Cafes;Tea Rooms;Food;Bubble Tea;Restaurants;Desserts"
      />
      <Restaurant
        name="Meraki Greek Grill"
        address="4950 S Rainbow Blvd, Ste 160"
        categories="Restaurants;Greek"
      />
      <Restaurant
        name="J Karaoke Bar"
        address="3899 Spring Mountain Rd"
        categories="Bars;American (New);Karaoke;Nightlife;Asian Fusion;Cocktail Bars;Restaurants"
      />
      <Restaurant
        name="Zenaida's Cafe"
        address="3430 E Tropicana Ave, Ste 32"
        categories="Restaurants;Breakfast & Brunch;Cafes"
      />
    </div>
  </div>
);

export default Restaurants;
