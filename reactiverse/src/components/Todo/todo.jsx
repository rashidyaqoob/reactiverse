import React, { useState } from 'react'
// import Header from '../Header/Header'
import "./Todo.scss"
import AddInput from './AddInput/AddInput'
import TodoList from './TodoList/TodoList'

function Todo() {

    const [todos, setTodos] = useState([])

    return (
        <div className="todo">
            < AddInput
                setTodos={setTodos}
                todos={todos}
            />
            < TodoList
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}

export default Todo
