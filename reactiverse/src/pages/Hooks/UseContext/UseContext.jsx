import { useState, createContext } from "react";
import UseContext2 from "./UseContext2";

export const UserContext = createContext()

const UseContext = () => {
  const [userName, setUserName] = useState("John Doe")

  return (
    <UserContext.Provider value={userName}>
      <h2>This is a username</h2>
      <UseContext2 />
    </UserContext.Provider>
  )
}

export default UseContext;