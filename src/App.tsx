import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addSchool } from "./redux/school/state";
import { setFilteredTeachers, setTeachers, setGenderRatio, setSubjectRatio } from "./redux/teachers/state";
import { addStudents, setStuGenderRatio, setClassRatio, } from "./redux/students/state";
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
  const {teachers} = useSelector((state: any) => state.teacher);
  const {students} = useSelector((state: any) => state.student);
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

  useEffect(() => {

    console.log("Dashboard useLayoutEffect")

    
    const maleNum = teachers.reduce((acc: any, item: any) => {
      if(item.gender === 1) {
        return acc = acc + 1
      } else {
        return acc
      }
    }, 0)

    const femaleNum = teachers.reduce((acc: any, item: any) => {
      if(item.gender === 2) {
        return acc = acc + 1
      } else {
        return acc
      }
    }, 0)

    dispatch(setGenderRatio(maleNum, femaleNum));

    const student_maleNum = students.reduce((acc: any, item: any) => {
      if(item.gender === 1) {
        return acc = acc + 1
      } else {
        return acc
      }
    }, 0)

    const student_femaleNum = students.reduce((acc: any, item: any) => {
      if(item.gender === 2) {
        return acc = acc + 1
      } else {
        return acc
      }
    }, 0)

    dispatch(setStuGenderRatio(student_maleNum, student_femaleNum))

    const koreanNum = (teachers.reduce((acc: any, item: any) => {
      return acc + (item.subject === 1)
    }, 0))

    const englishNum = (teachers.reduce((acc: any, item: any) => {
      return acc + (item.subject === 2)
    }, 0))

    const mathNum = (teachers.reduce((acc: any, item: any) => {
      return acc + (item.subject === 3)
    }, 0));

    const societyNum = (teachers.reduce((acc: any, item: any) => {
      return acc + (item.subject === 4)
    }, 0));

    const scienceNum = (teachers.reduce((acc: any, item: any) => {
      return acc + (item.subject === 5)
    }, 0))

    dispatch(setSubjectRatio(koreanNum, englishNum, mathNum, societyNum, scienceNum))

  }, [teachers, students])

  

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
