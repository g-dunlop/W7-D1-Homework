import './App.css';
import React, {useState} from 'react'

function App() {

  const [todos, setTodos] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" }
  ])

  const [newTodo, setNewTodo] = useState("")

  const todoNodes = todos.map((todo, index) => {
    return(
      <li key={index} className={todo.priority === "high" ? "high" : "low"}>
        <span>{todo.name}</span>
        {todo.priority === "high" ? <span className="high">High Priority</span> : <span className="low">Low Priority</span>}
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
