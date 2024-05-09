import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log('Connected');
      setSocket(socket);
    }

    socket.onmessage = (message) => {
      console.log('Received message', message.data);
    }

    setSocket(socket);
  }, [])

  if(!socket) {
    return (
      <div>
  
      </div>
    )
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default App
