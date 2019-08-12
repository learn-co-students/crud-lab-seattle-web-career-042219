import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={this.props.deleteRestaurant}
          updateRestaurant={this.props.updateRestaurant}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id }),
  updateRestaurant: restaurant =>
    dispatch({ type: "UPDATE_RESTAURANT", restaurant })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
