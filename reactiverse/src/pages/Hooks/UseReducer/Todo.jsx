import React from "react";
import "./UseReducer.scss";
import { Actions } from "./UseReducer";

const Todo = ({ todo, dispatch }) => {
  return (
    <div className="use-reducer__todo">
      <div
        style={{ color: todo.complete ? "#eee" : "#000" }}
        className="todo-item"
      >
        {todo.name}
      </div>
      <button
        onClick={() =>
          dispatch({
            type: Actions.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: Actions.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
