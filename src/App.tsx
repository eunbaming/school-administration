import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import {addSchool} from './redux/school/state';

import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import Join from "./pages/Join";

import {rootUrl} from './server';
import { getSchools } from './server/school';

function App() {
  const {schools} = useSelector((state: any) => state.school);
  const dispatch = useDispatch();

  useEffect(() => {
    getSchools().then((response: any) => {
      console.log("Get Schools success", response)
      dispatch(addSchool(response.data))
    })
    .catch((error: any) => console.log("Get Schols Failed", error));
  }, [])

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
