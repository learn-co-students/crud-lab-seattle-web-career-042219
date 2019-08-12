import React, { Component } from "react";

class Review extends Component {
  state = {
    text: "",
    editMode: false
  };
  handleDeleteClick = () => {
    this.props.deleteReview(this.props.review.id);
  };

  handleEditClick = e => {
    const review = this.props.reviews.find(x => x.id === e.target.dataset.id);
    this.setState({ editMode: true, text: review.text });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId,
      id: this.props.review.id
    });
    this.setState({ text: "", editMode: false });
  };

  render() {
    const { review } = this.props;
    return (
      <div>
        <li>{review.text}</li>

        <button onClick={this.handleEditClick} data-id={review.id}>
          {" "}
          Edit Review{" "}
        </button>
        <button onClick={this.handleDeleteClick}> Delete Review </button>
        {this.state.editMode ? (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="editReview"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <input type="submit" value="Submit this edit" />
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Review;
