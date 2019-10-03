import React, { Component } from "react";

export default class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "name",
      phone: "000-000-0000",
      id: 0
    }
  };

  state = {
    editing: false,
    name: "",
    phone: ""
  };

  handleRemove = () => {
    const {
      info: { id },
      onRemove
    } = this.props;
    onRemove(id);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleToggle = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { name, phone } = this.props.info;

    if (!prevState.editing && this.state.editing) {
      this.setState({
        name,
        phone
      });
    }
    if (prevState.editing && !this.state.editing) {
      const { info, onUpdate } = this.props;
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  render() {
    const style = {
      border: "2px solid grey",
      padding: "8px",
      margin: "15px"
    };
    const { editing } = this.state;

    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              name="phone"
              value={this.state.phone}
              placeholder="Phone"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggle}>Apply</button>
          <button onClick={this.handleRemove}>Delete</button>
        </div>
      );
    }
    const { name, phone } = this.props.info;
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleToggle}>Edit</button>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}
