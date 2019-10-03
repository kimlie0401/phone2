import React, { Component } from "react";
import "./App.css";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  state = {
    id: 2,
    information: [
      { id: 0, name: "DK", phone: "714-600-4308" },
      {
        id: 1,
        name: "Hannah",
        phone: "714-328-8616"
      }
    ],
    keyword: ""
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        id: this.state.id,
        ...data
      }),
      id: this.state.id + 1
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(item => item.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(item =>
        item.id === id ? { ...item, ...data } : item
      )
    });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      keyword: value
    });
  };

  UNSAFE_componentWillMount = () => {
    const contactD = localStorage.contactData;
    if (contactD) {
      this.setState({
        information: JSON.parse(contactD),
        id: JSON.parse(contactD).length
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      JSON.stringify(prevState.information) !==
      JSON.stringify(this.state.information)
    ) {
      localStorage.contactData = JSON.stringify(this.state.information);
    }
  };

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      item => item.name.toLowerCase().indexOf(keyword) > -1
    );

    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
