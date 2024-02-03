import './App.css';
import React, { Component, useEffect, useState } from "react";

import DataFetchHooks from './DataFetchHooks';
import CheckOnlineHook from './CheckOnlineHook';

function App() {
  return (
    <>
      {/* <MyComponent1/>
      <MyComponent2/> */}
      {/* <DataFetchHooks/> */}
      <CheckOnlineHook/>
    </>
  );
}

// useState using component
// function MyComponent1() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// class MyComponent2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 0};
//   }

//   incrementCount = () => {
//     this.setState({count: this.state.count+1});
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     )
//   }
// }


// useEffect using Component
// function MyComponent1() {
//   useEffect(() => {
//     console.error("component mounted");

//     //cleanup
//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);
//   return(
//     <div>
//       from my component
//     </div>
//   )
// }

// class MyComponent2 extends React.Component {
//   componentDidMount() {
//     console.log("component mounted");
//   }
//   componentWillUnmount() {
//     console.log("component unmounted");
//   }
//   render() {
//     <div>
//       this is comp
//     </div>
//   }
// }

export default App;