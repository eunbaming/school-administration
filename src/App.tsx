import React from "react";
import { Route, Routes } from "react-router-dom";
import Students from "./pages/Students";
import Home from "./pages/Home";
import Join from "./pages/Join";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="students" element={<Students />} />
        <Route path="join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
