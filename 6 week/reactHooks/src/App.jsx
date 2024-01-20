import './App.css';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

// render all todos
// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function (response) {
//         setTodos(response.data.todos);
//       })
//   }, []);

//   return (
//     <>
//       {todos.map(todo => {
//         return <Todo title={todo.title} description={todo.description}/>
//       })}
//     </>
//   )
// }
// function Todo({title, description}) {
//   return <div>
//     <h2>{title}</h2>
//     <p>{description}</p>
//   </div>
// }

function App() {

  const [selectedId, setSelectedId] = useState(1);

  return(
    <>
      <button onClick={
        () => {
          setSelectedId(1);
        }
      }>1</button>
      <button onClick={
        () => {
          setSelectedId(2);
        }
      }>2</button>
      <button onClick={
        () => {
          setSelectedId(3);
        }
      }>3</button>
      <button onClick={
        () => {
          setSelectedId(4);
        }
      }>4</button>
      <Todo id={selectedId}/>
    </>
  )
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
          .then(function (response) {
            setTodo(response.data.todo);
          })
  }, [id]);

  return <div>
    <h1>{todo.title}</h1>
    <p>{todo.description}</p>
  </div>
}

export default App