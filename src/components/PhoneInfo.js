import React, { Component } from "react";

export default class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "name",
      phone: "000-000-0000",
      id: 0
    }
  };
  render() {
    const style = {
      border: "2px solid grey",
      padding: "8px",
      margin: "15px"
    };
    const { name, phone, id } = this.props.info;
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
      </div>
    );
  }
}
