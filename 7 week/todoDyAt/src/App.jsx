import './App.css';
import { RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValue } from "recoil";
import { todosAtomFamily } from './atoms';

function App() {
  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}

function Todo({id}) {
  // const currentTodo = useRecoilValue(todosAtomFamily(id));
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  if(todo.state === "loading") {
    return <div>
      loading ...
    </div>
  }
  else if(todo.state === "hasValue") {
    return <div>
        {todo.contents.title}
        <br/>
        {todo.contents.description}
    </div>
  } else {
    return <div>
      Error while getting data
    </div>
  }
}

export default App
