import { useEffect } from "react";
import { useState } from "react";
import "./UseState.scss";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [updatedName, setUpdateName] = useState('');
  const [arrayList, setArrayList] = useState([]);
  const [arrayItem, setArrayItem] = useState('');


  function handleDecrement() {
    setCount((count) => count - 1);
  }

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleInputSubmit() {
    setUpdateName(name2)
  }
    // useEffect(()=> {
    //     setArray(array => [...array, arrayItem])
    // },[arrayItem])

  function handleItemChange (event) {
    setArrayItem(event.target.value)
  }

  function addItemToArray(event) {
    event.preventDefault();
    console.log("Array Item: ", arrayItem)
    setArrayList([...arrayList, arrayItem])
    setArrayItem('')
    console.log(arrayList)

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
        <div className="hook__examples__int">
          <h2>Counter</h2>
          <button className=" btn btn-decreament" onClick={handleDecrement}>
            {"-"}
          </button>
          <span className="hook__count">{count}</span>
          <button className=" btn btn-increament" onClick={handleIncrement}>
            {"+"}
          </button>
        </div>
        <div className="hooks__example__string">
            <h2>Enter Name</h2>
            <input type='text' className="input-name" placeholder="Enter Name" onChange={(event)=> setName1(event.target.value)} value={name1} />
            <p>Set Name: {name1}</p>
        </div>
        <div className="hooks__example__string">
            <h2>Enter Name</h2>
            <input type='text' className="input-name" placeholder="Enter Name" onChange={(event)=> setName2(event.target.value)} value={name2} />
            <p>Set Name: {name2}</p>
            <p>Update Name: {updatedName}</p>
            <button className="btn btn-enter" onClick={handleInputSubmit}>Enter</button>
        </div>
        <div className="hook__example__array">
            <input placeholder="Enter New Item" type='text' value={arrayItem} onChange={handleItemChange}  />
            <button onClick={addItemToArray}>Click</button>
            {   arrayList.map((item)=> {
                <div>{item}</div>
            })}
        </div>
      </div>
    </div>
  );
};

export default UseState;
