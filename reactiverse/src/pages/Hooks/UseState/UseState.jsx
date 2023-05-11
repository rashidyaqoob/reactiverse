import { useState } from "react";
import "./UseState.scss";

const UseState = () => {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount((count) => count - 1);
  }

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  return (
    <div className="hook">
      <div className="hook__info">
        <h1 className="hook__title"> UseState</h1>
        <p className="hook__description">
          The React useState Hook allows us to track state in a function
          component.
        </p>
      </div>
      <div className="hook__examples">
        <div>
          <h2>Counter</h2>
          <button className=" btn btn-decreament" onClick={handleDecrement}>
            {"-"}
          </button>
          <span className="hook__count">{count}</span>
          <button className=" btn btn-increament" onClick={handleIncrement}>
            {"+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
