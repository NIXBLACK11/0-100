import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [effect, setEffect] = useState(1);

  // setTimeout(() => {
  //   setEffect(effect*3);
  // }, 10000);

  const value = useMemo(() => {
    return Math.pow(count, 2);
  }, [count]);

  useEffect(() => {
    setEffect(effect*3);
  }, [count]);

  return (
    <>
      <h1>{effect}</h1>
      <h1>{value}</h1>
      <button onClick={() => {
        setCount(count+1);
      }}>Click {count}</button>
    </>
  )
}

export default App;
