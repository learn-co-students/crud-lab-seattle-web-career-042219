import React, { Component } from "react";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    });
    this.setState({ text: "" });
  };

  handleOnChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="input-review">Input Review: </label>
          <input
            type="text"
            id="input-review"
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
