import React, { Component } from "react";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      editMode: false
    };
  }

  handleDeleteClick = e => {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id);
  };

  handleEditClick = e => {
    e.preventDefault();
    const review = this.props.reviews.find(
      review => review.id === e.target.dataset.id
    );
    this.setState({ text: review.text, editMode: true });
  };

  handleOnChange = e => {
    this.setState({ text: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.updateReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId,
      id: this.props.review.id
    });
    this.setState({ editMode: false, text: "" });
  };

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>{review.text}</li>
        <button onClick={this.handleDeleteClick}> Delete </button>
        <button onClick={this.handleEditClick} data-id={review.id}>
          {" "}
          Edit{" "}
        </button>
        {this.state.editMode ? (
          <div>
            <form onSubmit={this.handleOnSubmit}>
              <label htmlFor="the-submit">Edit: </label>
              <input
                id="the-submit"
                type="text"
                value={this.state.text}
                onChange={this.handleOnChange}
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Review;
