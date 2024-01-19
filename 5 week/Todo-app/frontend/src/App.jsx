import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // const res = await fetch("http://localhost:3000/todos");
  // const jsonData = await res.json();
  // setTodos(jsonData.todos);

  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>
      {/* <Todos todos={[
        {
          title: "to the gym",
          description: "go to the gym",
          completed: false
        },
        {
          title: "do dsa",
          description: "to do dsa",
          completed: false
        }
      ]}/> */}
    </div>
  )
}

export default App
