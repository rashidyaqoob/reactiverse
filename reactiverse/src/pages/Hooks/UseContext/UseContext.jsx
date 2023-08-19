import { useState, createContext } from "react";
import UseContext2 from "./UseContext2";
import "./UseContext.scss";

export const UserContext = createContext();

const UseContext = () => {
  const [userName, setUserName] = useState("John Doe");

  return (
    <div className="use-context">
      <UserContext.Provider value={userName}>
        <h2>
          The useContext hook in React allows components to consume values from
          a context without using a higher-order component or prop drilling. It
          provides a way to access the context value directly within the
          component tree.
        </h2>
        <h2>From Component 1</h2>
        <h2>This is a username: John Doe</h2>
        <UseContext2 />
      </UserContext.Provider>
    </div>
  );
};

export default UseContext;
