import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Students from "./pages/Students";

function App() {
  return (
    <div>
      <Route>
        <Students />
      </Route>
    </div>
  );
}

export default App;
