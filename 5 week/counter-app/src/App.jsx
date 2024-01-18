import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "DSA",
    completed: true
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: "new todo",
      description: "new description"
    }])
  }

  return (
    <>
      <div>
        <button onClick={addTodo}>Add a random todo</button>
        {/* Better way to do this */}
        {/* <Todo title={todos[0].title} description={todos[0].description}></Todo> */}
        {todos.map(function (todo) {
          return <Todo title={todo.title} description={todo.description}/>
        })}
      </div>
    </>
  )

  function Todo(props) {
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  }
}

export default App