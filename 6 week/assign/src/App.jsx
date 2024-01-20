import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("")
         .then((res) => {
            setTodos(res.data.todos);
         })
    }, [])
}

function App() {
    const todos = useTodos();

    return (
        <>
            {todos}
        </>
    )
}

export default App;