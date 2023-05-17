import { useCallback, useState } from "react";
import "./Usecallback.scss";
import List from "./List";

function Usecallback() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  // Here [number] denotes dependency for useCallback hook

  const items = useCallback(() => {
    return [parseInt(number), parseInt(number) + 1, parseInt(number) + 2];
  }, [number]);

  return (
    <>
      <div className="hook__callback" style={theme}>
        <h1>Usecallback hook</h1>
        <input
          type="number"
          placeholder="Enter the number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => setDark((dark) => !dark)} value={"Toggle theme"}>
          Magic Button :)
        </button>
        <ul>
          <List getItems={items} />
        </ul>
      </div>
    </>
  );
}

export default Usecallback;
