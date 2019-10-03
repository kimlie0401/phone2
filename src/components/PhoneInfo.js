import React, { Component } from "react";

export default class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "name",
      phone: "000-000-0000",
      id: 0
    }
  };

  handleRemove = () => {
    const {
      info: { id },
      onRemove
    } = this.props;
    onRemove(id);
  };

  render() {
    const style = {
      border: "2px solid grey",
      padding: "8px",
      margin: "15px"
    };
    const { name, phone } = this.props.info;
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}
