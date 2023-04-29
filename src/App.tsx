import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import Join from "./pages/Join";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="dashboard/*" element={<Dashboard/>}/>
        <Route path="join" element={<Join/>} />
      </Routes>
    </div>
  );
}

export default App;
