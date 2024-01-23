import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import React, { Suspense } from 'react';

//for lazy load
// const Dashboard = React.lazy(() => import("./components/Dashboard"));
// const Landing = React.lazy(() => import("./components/Landing"));

import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

function App() {
  return (
    <>
      <div>hello</div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          //suspense is used when lazy loading
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <button onClick={() => {
      navigate("/");
    }}>Landing page</button>
    <button onClick={() => {
      navigate("/dashboard");
    }}>Dashboard</button>
  </div>
}

export default App
