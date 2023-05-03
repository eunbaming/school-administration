import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import {addSchool} from './redux/school/state';

import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import Join from "./pages/Join";
import {rootUrl} from './server';


function App() {
  const {schools} = useSelector((state: any) => state.school);
  const dispatch = useDispatch();
  console.log("schools", schools);

  useEffect(() => {
    axios.get(`${rootUrl}/school/all`)
    .then((response) => {
      console.log("response", response.data.data);
      dispatch(addSchool(response.data.data));
      
    })
    .catch((error) => {
      console.log("error", error)
    })
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
