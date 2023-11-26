import "./Usememo.scss";
import { useMemo, useState } from "react";

function Usememo() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const sum = useMemo(() => {
    return parseInt(num1) + parseInt(num2);
  }, [num1, num2]);

  return (
    <>
      <div className="use-memo">
        <h1>Use Memo</h1>
        <p>
          The useMemo hook in React is used to memoize the result of a
          computation. It allows you to optimize performance by avoiding
          unnecessary calculations or expensive operations when the dependencies
          of the computation haven’t changed.
        </p>
        <input
          type="number"
          placeholder="Enter the num1"
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter the num2"
          onChange={(e) => setNum2(e.target.value)}
        />
        <p>
          The sum of {num1} and {num2} is {sum}.
        </p>
      </div>
    </>
  );
}

export default Usememo;
