import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [effect, setEffect] = useState(1);
  const [test, useTest] = useState(1);
  const divRef = useRef();

  
  const calc = useCallback(function() {
    return test+2;
  }, [test]);
  // setTimeout(() => {
  //   setEffect(effect*3);
  // }, 10000);

  const value = useMemo(() => {
    // divRef.current.innerHTML = 10;
    return Math.pow(count, 2);
  }, [count]);

  useEffect(() => {
    setEffect(effect*3);

  }, [count]);

  return (
    <>
      <h1 ref={divRef}>{effect}</h1>
      <h1>{value}</h1>
      <button onClick={() => {
        setCount(count+1);
      }}>Click {count}</button>
      <Calculator calc={calc}/>
    </>
  )
}

//will only re render when the input function changes
const Calculator = function({calc}) {
  
  return <div>
    hello {calc()}
  </div>
}

export default App;
