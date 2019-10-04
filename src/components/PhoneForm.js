import React, { Component } from "react";
import "./PhoneForm.css";

export default class PhoneForm extends Component {
  state = { name: "", phone: "" };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: ""
    });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            placeholder="Phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
