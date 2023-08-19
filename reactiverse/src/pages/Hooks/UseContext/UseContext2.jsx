import { useContext } from "react";
import { UserContext } from "./UseContext.jsx";

const UseContext2 = () => {
  const userName = useContext(UserContext);

  return (
    <>
      <h2>From Component 2</h2>
      <h2>This is my name: {userName}</h2>
      <p>
        // Here we've saved the usename in the usecontext in component 1 so that
        we can use anywhere in the application using the it
      </p>
    </>
  );
};

export default UseContext2;
