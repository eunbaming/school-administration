import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addSchool } from "./redux/school/state";
import { setFilteredTeachers, setTeachers } from "./redux/teachers/state";
import { addStudents } from "./redux/students/state";
import { setCurrentTab } from "./redux/tab/state";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Join from "./pages/Join";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";

import { rootUrl } from "./server";
import { GET_getSchools } from "./server/school";
import { GET_getTeachers } from "./server/teacher";
import { GET_getStudents } from "./server/student";
import { error } from "console";

function App() {
  const { schools } = useSelector((state: any) => state.school);
  const { currentTab } = useSelector((state: any) => state.tab);
  const dispatch = useDispatch();

  useEffect(() => {
    GET_getTeachers()
      .then((response: any) => {
        console.log("GET_getTeachers response", response.data._data);
        dispatch(setTeachers(response.data._data));
        dispatch(setFilteredTeachers(response.data._data));
      })
      .catch((error: any) => {
        console.log("GET_getTeachers error", error);
      });

    GET_getStudents()
      .then((response: any) => {
        console.log("GET_getStudents response", response.data._data);
        dispatch(addStudents(response.data._data));
      })
      .catch((error: any) => {
        console.log("GET_getStudents error", error);
      });

    GET_getSchools()
      .then((response: any) => {
        console.log("Get Schools success", response);
        dispatch(addSchool(response.data._data));
      })
      .catch((error: any) => console.log("Get Schols Failed", error));
  }, []);

  const location = useLocation();

  useEffect(() => {
    console.log("location", location);

    if (location.pathname === "/teachers") {
      dispatch(setCurrentTab("teachers"));
    } else if (location.pathname === "/students") {
      dispatch(setCurrentTab("students"));
    } else {
      dispatch(setCurrentTab("dashboard"));
    }
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="join" element={<Join />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="students" element={<Students />} />
      </Routes>
    </div>
  );
}

export default App;
