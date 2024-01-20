import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';

function App() {
  const [ans, setAns] = useState(0);
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let a = 1
    for(let i=1;i<=value;i++) {
      a=a*i;
    }
    setAns(a);
  }, [value]);


  //using useMemo helps in defining less state variables
  let answer = useMemo(() => {
    let count = 1;
    for(let i=1;i<=value;i++) {
      count=count*i;
    }
    return count;
  }, [value]);

  return (
    <>
      <input type='text' onChange={(e) => {
        setValue(e.target.value);
      }}></input>
      <p>{ans}</p>
      <p>{answer}</p>
      <button onClick={() => {
        setCount(count+1);
      }}>{count}</button>
    </>
  )
}

export default App;