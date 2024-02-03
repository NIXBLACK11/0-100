import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
    const[todos, setTodos] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(async () => {
        const clockValue = setInterval(async () => {
            const resp = await axios.get("https://sum-server.100xdevs.com/todos");
            setTodos(resp.data.todos);
            setLoading(false);
        }, n*1000);
        const resp = await axios.get("https://sum-server.100xdevs.com/todos");
            setTodos(resp.data.todos);
            setLoading(false);
        //cleanup the clock if n changes
        return () => {
            clearInterval(clockValue);
        }
    }, [n]);

    return { todos, loading };
}


function DataFetchHooks() {
    const { todos, loading } = useTodos(5);
    if(loading) {
        return <div>
            Loading
        </div>
    }

    if (!Array.isArray(todos)) { 
        return <div>No todos available</div>;
    }

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