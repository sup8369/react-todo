import React, { Component } from "react";
import TodoList from "./components/TodoList";
import Controller from "./components/Controller";
import List from "./components/List";
class App extends Component {
  render() {
    return (
      <div>
        <TodoList controller={<Controller />}>
          <List />
        </TodoList>
      </div>
    );
  }
}

export default App;
