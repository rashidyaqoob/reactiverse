import { useContext } from "react";
import { UserContext } from "./UseContext.jsx";

const UseContext2 = () => {
  const userName = useContext(UserContext)

  return (
    <>
    <p>This is my name</p>
      {userName}
    </>
  )
}

export default UseContext2;