import { useReducer } from "react";
import { useState } from "react";
import "./UseReducer.scss";
import Todo from "./Todo";

export const Actions = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case Actions.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case Actions.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return console.error("No case submitted");
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    // dispatch take the case parameter based on which our action will take place
    dispatch({ type: Actions.ADD_TODO, payload: { name: name } });
  }

  return (
    <div className="use-reducer">
      <p>
        {" "}
        UseReducer is typically used as an alternative to the useState hook when
        the state logic becomes more intricate or involves multiple related
        values.{" "}
      </p>
      <p>Enter Todo for the day</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter Todo"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input-name"
        />
      </form>
      {todos.map((todo) => {
        return <Todo todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default UseReducer;
