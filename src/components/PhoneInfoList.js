import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

export default class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.log("onRemove not defined"),
    onUpdate: () => console.log("onUpdate not defined")
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    console.log("rendered PhoneInfoList");
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map((info, index) => (
      <PhoneInfo
        key={index}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    ));

    return <div>{list}</div>;
  }
}
