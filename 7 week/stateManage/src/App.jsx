import { useRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import './App.css';
import { countAtom } from "./store/atoms/count";
import { evenSelector } from './store/atoms/count';

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer/>
    <Buttons/>
    <Display/>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const [ count, setCount ] = useRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count+1);
    }}>Increase</button>

    <button onClick={() => {
      setCount(count-1);
    }}>Decrease</button>
  </div>
}


//But a display is a dervied dependency we can use something like useMemo but for recoilers
function Display() {
  // const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);
  return <div>
    it is {isEven ? "even": "odd"}
  </div>
}

export default App
