import React from "react";
import { Route, Routes } from "react-router-dom";
import Students from "./pages/Students";
import Dashboard from "./pages/Dashboard";
import Join from "./pages/Join";


function App() {
  return (
    <div>
      <Routes>
        <Route path="dashboard/*" element={<Dashboard/>}/>
        <Route path="join" element={<Join/>} />
      </Routes>
    </div>
  );
}

export default App;
