import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <Item text="Make Todo" />
        <Item text="Minecraft" />
        <Item text="Test" />
      </div>
    );
  }
}

export default List;
