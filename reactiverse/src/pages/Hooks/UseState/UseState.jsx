import { useState } from "react";
import "./UseState.scss";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [updatedName, setUpdateName] = useState("");
  const [arrayItem, setArrayItem] = useState("");
  const [arrayList, setArrayList] = useState([]);

  function handleDecrement() {
    setCount((count) => count - 1);
  }

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleInputSubmit() {
    setUpdateName(name2);
  }

  function handleItemChange(event) {
    setArrayItem(event.target.value);
  }

  function addItemToArray(event) {
    event.preventDefault();
    console.log("Array Item: ", arrayItem);
    console.log(arrayList);
    setArrayList((arrayList) => [...arrayList, arrayItem]);
    setArrayItem("");
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
        <h2>UseSate Examples</h2>
        <div className="hook__examples__int">
          <h2>Counter</h2>
          <button className=" btn btn-decrement" onClick={handleDecrement}>
            {"-"}
          </button>
          <span className="hook__count">{count}</span>
          <button className=" btn btn-increment" onClick={handleIncrement}>
            {"+"}
          </button>
        </div>
        <div className="hooks__example__string">
          <h2>Enter Name</h2>
          <input
            type="text"
            className="input-text"
            placeholder="Enter Name"
            onChange={(event) => setName1(event.target.value)}
            value={name1}
          />
          <p>Set Name: {name1}</p>
        </div>
        <div className="hooks__example__string">
          <h2>Enter Name</h2>
          <input
            type="text"
            className="input-text"
            placeholder="Enter Name"
            onChange={(event) => setName2(event.target.value)}
            value={name2}
          />
          <p>Set Name: {name2}</p>
          <p>Update Name: {updatedName}</p>
          <button className="btn btn-enter" onClick={handleInputSubmit}>
            Enter
          </button>
        </div>
        <div className="hook__example__array">
          <form onSubmit={addItemToArray}>
            <input
              placeholder="Enter New Item"
              type="text"
              className="input-text"
              value={arrayItem}
              onChange={handleItemChange}
            />
            <button>Click</button>
          </form>
          <ul>
            {arrayList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseState;
