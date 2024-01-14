import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick=
        {
          function() {
            setCount(
              function(count) {
                count = count + 1;
                return count;
              }
            )
          }
        }
      >
        count is {count}
      </button>
    </div>
  )
}

export default App
