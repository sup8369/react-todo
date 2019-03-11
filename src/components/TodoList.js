import React from "react";
import "./TodoList.css";

const TodoList = ({ controller, children }) => {
  return (
    <div className="todo">
      <div className="colWrapper">
        <div className="title">React To Do</div>
      </div>
      <div className="colWrapper">
        <div className="controller">{controller}</div>
        <div className="lists">{children}</div>
      </div>
    </div>
  );
};

export default TodoList;
