import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [req, setReq] = useState(0);

  function load() {
    setInterval(() => {
      setReq(req+1);
    }, 5000);
  }

  //or you can do
  // useEffect(() => {
  //   setInterval(() => {
  //     fetch("https://sum-server.100xdevs.com/todos")
  //       .then(async function(res) {
  //         const json = await res.json();
  //         setTodos(json.todos);
  //       })
  //     }, 5000)
  // }, []);


  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, [req]);

  load();

  return (
    <>
      {todos.map(todo => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
