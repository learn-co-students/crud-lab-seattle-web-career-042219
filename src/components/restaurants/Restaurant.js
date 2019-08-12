import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Restaurant extends Component {
  state = {
    text: "",
    editRestuarantMode: false
  };

  handleDeleteClick = e => {
    e.preventDefault();
    this.props.deleteRestaurant(this.props.restaurant.id);
  };

  handleEditClick = e => {
    e.preventDefault();
    const restaurantToFind = this.props.restaurants.find(
      restaurant => restaurant.id === e.target.dataset.id
    );
    this.setState({ editRestuarantMode: true, text: restaurantToFind.text });
  };

  handleChange = e => {
    this.setState({ reviewText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateRestaurant({
      text: this.state.text,
      id: this.props.restaurant.id
    });
    this.setState({ editRestuarantMode: false, text: "" });
  };

  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={event => this.handleDeleteClick(event)}> X </button>
          {this.state.editRestuarantMode ? (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="editRestaurant">Edit Restaurant</label>
                <input
                  id="editRestaurant"
                  type="text"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
          ) : null}
          <ReviewsContainer
            restaurant={restaurant}
            reviews={this.props.reviews}
          />
        </li>
      </div>
    );
  }
}

export default Restaurant;
