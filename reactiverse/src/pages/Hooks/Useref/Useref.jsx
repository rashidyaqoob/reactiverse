import "./Useref.scss";
import { useEffect, useRef, useState } from "react";

function Useref() {
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);

  function handleClick1() {
    myRef1.current.focus();
  }
  useEffect(function handleClick2() {
    myRef2.current.focus();
  }, []);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    const { width, height } = div.getBoundingClientRect();
    setWidth(width);
    setHeight(height);
  }, []);

  return (
    <>
      <div className="hook__useref">
        <h1>Use Ref Hook</h1>
        <p>The useRef hook in React provides a way to create mutable references that persist across re-renders of a component. It allows you to access and modify DOM elements or other values without triggering re-rendering.</p>
        <div>
          <div>
            <input
              type="text"
              ref={myRef2}
              placeholder="Input 2 auto focus on load"
            />
          </div>
          <div>
            <input
              type="text"
              ref={myRef1}
              placeholder="Input 1 button focus on click"
            />
            <button onClick={handleClick1}>Focus Input1</button>
          </div>
        </div>
        <h1>Rending Height and width of the element on mount</h1>
        <div ref={divRef}>
          <p>Width: {width}px</p>
          <p>Height: {height}px</p>
        </div>
      </div>
    </>
  );
}

export default Useref;
