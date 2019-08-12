import React, { Component } from "react";

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleOnKeyDown = e => {
    this.setState({ text: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label htmlFor="text">Name: </label>
          <input
            id="text"
            type="text"
            value={this.state.text}
            onChange={e => this.handleOnKeyDown(e)}
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
