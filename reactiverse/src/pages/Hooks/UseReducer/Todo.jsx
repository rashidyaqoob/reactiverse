import React from "react";
import "./UseReducer.scss";
import { Actions } from "./UseReducer";

const Todo = ({ todo, dispatch }) => {
  return (
    <div className="use-reducer__todo">
      <div style={{ color: todo.complete ? "#eee" : "#000" }}>{todo.name}</div>
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
      <button>Delete</button>
    </div>
  );
};

export default Todo;
