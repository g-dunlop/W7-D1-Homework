import './App.css';
import React, {useState} from 'react'

function App() {

  const [todos, setTodos] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" }
  ])

  const [newTodo, setNewTodo] = useState('');
  const [newPriority, setNewPriority] = useState('');

  // const changePriority = (event) => {
    
  //   if (event.target.value === "high"){
  //     // console.log(todos[index].name);
  //     setTodos(event.target.value);
  //   }
  //   //   setTodos(todos[index].priority = "low");
  //    else {
  //     setTodos(event.target.value);}
  //     // console.log(todos[index].name)}
  //   //   setTodos(todos[index].priority = "high");
  //   // } 
  // }

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value);
  }

  const handleRadioButton = (event) => {
    setNewPriority(event.target.value);
  }

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push({name: newTodo, priority: newPriority});
    setTodos(copyTodos);
    setNewTodo('');
    setNewPriority('');
  }

  const todoNodes = todos.map((todo, index) => {
    return(
      <li key={index} className={todo.priority === "high" ? "high" : "low"}>
        <span>{todo.name}</span> <button value={todo.priority}  id="change-priority">Change Priority</button>
      </li>
    )
  })

  return (
    <div className="App">

      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {todoNodes}
      </ul>

      <form onSubmit={saveNewTodo}>
        <label htmlFor="new-todo">Add New Task: </label>
        <input id="new-todo" type="text" value={newTodo} onChange={handleTodoInput} />
        <div >
          <label htmlFor="new-priority">High Priority</label>
          <input type="radio" id="high" name="priority" onClick={handleRadioButton}  value="high"   />
          <label htmlFor="new-priority">Low Priority</label>
          <input type="radio" id="low" name="priority" onClick={handleRadioButton}  value="low"/>
        </div>

        <input type="submit" value="Save New Task" />
      </form>
    </div>
  );

}
export default App;
