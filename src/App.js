import './App.css';
import React, {useState} from 'react'

function App() {

  const [todos, setTodos] = useState([
    "Buy shopping", "Clean bathroom", "Car's MOT"
  ])

  const [newTodo, setNewTodo] = useState("")

  const todoNodes = todos.map((todo, index) => {
    return(
      <li key={index} className="">
        <span>{todo}</span>
      </li>
    )
  })

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value)
  }

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodos = [...todos]
    copyTodos.push(newTodo)
    setTodos(copyTodos)
    setNewTodo("")
  }

  return (
    <>
      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {todoNodes}
      </ul>

      <form onSubmit={saveNewTodo}>
        <label htmlFor="new-todo">Add New Task: </label>
        <input id="new-todo" type="text" onChange={handleTodoInput}></input>
        <input type="submit" value="Save New Task"></input>
      </form>
    </>
  );
}

export default App;
