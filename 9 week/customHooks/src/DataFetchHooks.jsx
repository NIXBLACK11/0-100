import { useEffect, useState } from "react";
import axios from "axios";

function useTodos() {
    const[todos, setTodos] = useState([]);

    useEffect(async () => {
        const resp = await axios.get("https://sum-server.100xdevs.com/todos");
        setTodos(resp.data.todos);
    }, []);

    return todos;
}


function DataFetchHooks() {
    const todos = useTodos(); 
    return <div>
        {todos.map(todo => <Track todo={ todo }/>)}
    </div>
}

function Track({ todo }) {
    return <div>
        {todo.title}
        <br/>
        {todo.description}
    </div>
}

export default DataFetchHooks;