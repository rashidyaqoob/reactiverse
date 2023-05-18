import { useReducer } from "react";
import { useState } from "react";
import './UseReducer.scss'

const Actions ={
  ADD_TODO: "todos"
}

function reducer( todos, action) {
  switch(action.type){
    case Actions.ADD_TODO: 
    return [...todos, newTodo (action.payload.name)]
  }
}

function newTodo (name) {
  return { id: Date.now(), name: name, complete: false }
}

const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  const[name, setName] = useState('')

 

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch take the case parameter based on which our action will take place
    dispatch({type: Actions.ADD_TODO, payload: { name: name }})
    
  }
  console.log(todos)

  return(
    <div className="use-reducer">
      <form  onSubmit={handleSubmit}>
        <input type='text' placeholder="enter Todo" onChange={(e)=> (setName(e.target.value))} value={name} className="input-name"/>
      </form>
      {todos.map((todo) => {
        return <p>{todo.name}</p>
       
      })}
    </div>
  )
}

export default UseReducer;