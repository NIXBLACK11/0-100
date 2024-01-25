import { useState } from 'react';
import { useRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import { todoAtom, searchAtom, todoQuery } from "./store/atoms/recoilAtom";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  );
}

function Todo() {
  return (
    <div>
      <Todos />
      <SearchTodo />
      <Find />
    </div>
  );
}

function Todos() {
  const todos = useRecoilValue(todoAtom);
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>{todo.title}</div>
      ))}
    </div>
  );
}

function SearchTodo() {
  const [text, setText] = useRecoilState(searchAtom);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}

function Find() {
  const foundTodo = useRecoilValue(todoQuery);
  return (
    <div>
      {foundTodo.map((todo, index) => (
        <div key={index}>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;