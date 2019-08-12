import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    let restaurantsList;
    const { restaurants } = this.props;
    if (restaurants && restaurants !== []) {
      restaurantsList = restaurants.map(restaurant => {
        return (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={this.props.deleteRestaurant}
            updateRestaurant={this.props.updateRestaurant}
          />
        );
      });
    } else {
      return null;
    }
    return <ul style={{ listStyleType: "none" }}>{restaurantsList}</ul>;
  }
}

export default Restaurants;
