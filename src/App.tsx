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

import {rootUrl} from './server';
import { GET_getSchools } from './server/school';
import { GET_getTeachers } from "./server/teacher";

function App() {
  const { schools } = useSelector((state: any) => state.school);
  const { currentTab } = useSelector((state: any) => state.tab);
  const dispatch = useDispatch();

  useEffect(() => {

    GET_getTeachers()
    .then((response: any) => {
    console.log("GET_getTeachers response", response.data._data)
    dispatch(setTeachers(response.data._data)); 
    dispatch(setFilteredTeachers(response.data._data));
  })
    .catch((error: any) => {
      console.log("GET_getTeachers error", error);
    })

    dispatch(addStudents(STUDENTS_DATA));

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




const STUDENTS_DATA = [
  {
    name: "Eneh Mercy",
    class: "1",
    email: "michelle.rivera@example.com",
    id: 703703,
    gender: "Female",
    profileImage: "/profileImages/Eneh_Mercy.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "01012345678",
  },
  {
    name: "Marvin McKinney",
    class: "2",
    email: "kenzi.lawson@example.com",
    id: 877037,
    gender: "Female",
    profileImage: "/profileImages/Marvin_McKinney.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "01012345678",
  },
  {
    name: "Brooklyn Simmons",
    class: "3",
    email: "nathan.roberts@example.com",
    id: 370357,
    gender: "Female",
    profileImage: "/profileImages/Brooklyn_Simmons.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "01012345678",
  },
  {
    name: "Dianne Russell",
    class: "3",
    email: "felicia.reid@example.com",
    id: 870316,
    gender: "Male",
    profileImage: "/profileImages/Dianne_Russell.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "01012345678",
  },
  {
    name: "Cody Fisher",
    class: "3",
    email: "tim.jennings@example.com",
    id: 547030,
    gender: "Female",
    profileImage: "/profileImages/Cody_Fisher.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "01012345678",
  },
  {
    name: "Guy Hawkins",
    class: "1",
    email: "alma.lawson@example.com",
    id: 270374,
    gender: "Female",
    profileImage: "/profileImages/Guy_Hawkins.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "01012345678",
  },
  {
    name: "Devon Lane",
    class: "2",
    email: "debra.holt@example.com",
    id: 970322,
    gender: "Female",
    profileImage: "/profileImages/Devon_Lane.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "01012345678",
  },
  {
    name: "Ronald Richards",
    class: "2",
    email: "deanna.curtis@example.com",
    id: 570336,
    gender: "Male",
    profileImage: "/profileImages/Ronald_Richards.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "01012345678",
  },
  {
    name: "Bessie Cooper",
    class: "3",
    email: "jackson.graham@example.com",
    id: 570356,
    gender: "Female",
    profileImage: "/profileImages/Bessie_Cooper.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "01012345678",
  },
  {
    name: "Savannah Nguyen",
    class: "1",
    email: "dolores.chambers@example.com",
    id: 177037,
    gender: "Female",
    profileImage: "/profileImages/Savannah_Nguyen.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "01012345678",
  },
];
