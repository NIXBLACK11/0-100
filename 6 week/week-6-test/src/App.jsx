// // This will give rerenders

// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [name, setName] = useState("Siddharth")

//   function changeFunc() {
//     setName(Math.random());
//   }

//   return (
//     <>
//       <button onClick={changeFunc}>Click to change title</button>
//       <Header title={`My Name is ${name}`}/>
//       <Header title="My name is Rana"/>
        // <Header title="My name is Rana"/>
        // <Header title="My name is Rana"/>
        // <Header title="My name is Rana"/>
        // <Header title="My name is Rana"/>
//     </>
//   )
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// export default App

// Basic solution where the dynamic state is shifted to the bottom of the react tree

// import { useState } from 'react'
// import './App.css'

// function App() {
//   return (
//     <>
//       <ButtonHeader/>
//       <Header title="My name is Rana"/>
        // <Header title="My name is Rana"/>
        // <Header title="My name is Rana"/>
        // <Header title="My name is Rana"/>
        // <Header title="My name is Rana"/>
//     </>
//   )
// }

// function ButtonHeader() {

//   const [name, setName] = useState("Siddharth")

//   function changeFunc() {
//         setName(Math.random());
//       }

//   return<div>
//     <button onClick={changeFunc}>Click to change title</button>
//     <Header title={`My Name is ${name}`}/>
//   </div>
// }

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// export default App

import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("Siddharth")

  function changeFunc() {
    setName(Math.random());
  }

  return (
    <div>
      <button onClick={changeFunc}>Click to change title</button>
      <Header title={`My Name is ${name}`}/>
      <Header title="My name is Rana"/>
      <Header title="My name is Rana"/>
      <Header title="My name is Rana"/>
      <Header title="My name is Rana"/>
      <Header title="My name is Rana"/>
    </div>
  )
}

const Header = React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})

export default App