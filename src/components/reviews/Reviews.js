import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    let reviewsList;
    const { reviews, restaurantId } = this.props;
    if (reviews && reviews !== []) {
      const filteredReviews = reviews.filter(
        review => review.restaurantId === this.props.restaurantId
      );
      reviewsList = filteredReviews.map(review => {
        return (
          <Review
            key={review.id}
            review={review}
            reviews={reviews}
            restaurantId={restaurantId}
            deleteReview={this.props.deleteReview}
            updateReview={this.props.updateReview}
          />
        );
      });
    } else {
      return null;
    }
    return <ul style={{ listStyleType: "none" }}>{reviewsList}</ul>;
  }
}

export default Reviews;
