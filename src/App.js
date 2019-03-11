import React, { Component } from "react";
import TodoList from "./components/TodoList";
import Controller from "./components/Controller";
class App extends Component {
  render() {
    return (
      <div>
        <TodoList controller={<Controller />} />
      </div>
    );
  }
}

export default App;
