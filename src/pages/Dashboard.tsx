import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Layout from "../component/Layout";
import Teachers from "../pages/Teachers";
import Students from "../pages/Students";
import Teacherdetail from "../pages/TeacherDetail";
import { getTeachers } from "../server/teachers";
import { addTeachers } from "../redux/teachers/state";
import { addStudents } from "../redux/students/state";

const Container = styled.div`
  padding: 4rem;
`;

const TitleDiv = styled.div`
  font-family: "KumbhSans-SemiBold";
  font-size: 36px;
  font-weight: 600;
`;

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem("currentTab") !== null
      ? localStorage.getItem("currentTab")
      : "dashboard"
  );
  const { teachers } = useSelector((state: any) => state.teacher);
  const { students } = useSelector((state: any) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    //getTeachers();
    dispatch(addTeachers(TEACHERS_DATA));
    dispatch(addStudents(STUDENTS_DATA));
  }, []);

  const changeCurrentTab = (tab: string) => {
    setCurrentTab(tab);
    localStorage.setItem("currentTab", tab);
  };

  return (
    <Layout currentTab={currentTab} changeCurrentTab={changeCurrentTab}>
      <Routes>
        <Route path="teachers/*" element={<Teachers teacherArr={teachers} />} />
        <Route
          path="teachers/:teacher"
          element={<Teacherdetail teacher={TEACHERS_DATA[0]} />}
        />
        <Route path="students" element={<Students studentArr={students} />} />
      </Routes>

      <Container>
        <TitleDiv>Welcome to your dashboard, Udemy school</TitleDiv>
      </Container>
    </Layout>
  );
};

export default Dashboard;

const TEACHERS_DATA = [
  {
    name: "Kristin Watson",
    subject: "Chemistry",
    class: "2",
    email: "michelle.rivera@example.com",
    gender: "Female",
    profileImage: "/profileImages/Kristin_Watson.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 30,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Marvin McKinney",
    subject: "French",
    class: "3",
    email: "debbie.baker@example.com",
    gender: "Male",
    profileImage: "/profileImages/Marvin_McKinney.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 40,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Jane Cooper",
    subject: "Math",
    class: "1",
    email: "kenzi.lawson@example.com",
    gender: "Female",
    profileImage: "/profileImages/Jane_Cooper.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 25,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Cody Fisher",
    subject: "English",
    class: "2",
    email: "nathan.roberts@example.com",
    gender: "Male",
    profileImage: "/profileImages/Cody_Fisher.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 32,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Bessie Cooper",
    subject: "Social studies",
    class: "3",
    email: "felicia.reid@example.com",
    gender: "Male",
    profileImage: "/profileImages/Bessie_Cooper.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 28,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Leslie Alexander",
    subject: "Home economics",
    class: "1",
    email: "tim.jennings@example.com",
    gender: "Female",
    profileImage: "/profileImages/Leslie_Alexander.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 23,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Kristin Watson",
    subject: "Chemistry",
    class: "2",
    email: "michelle.rivera@example.com",
    gender: "Female",
    profileImage: "/profileImages/Kristin_Watson.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 36,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Marvin McKinney",
    subject: "French",
    class: "3",
    email: "debbie.baker@example.com",
    gender: "Male",
    profileImage: "/profileImages/Marvin_McKinney.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 33,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Jane Cooper",
    subject: "Math",
    class: "1",
    email: "kenzi.lawson@example.com",
    gender: "Female",
    profileImage: "/profileImages/Jane_Cooper.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 45,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Cody Fisher",
    subject: "English",
    class: "2",
    email: "nathan.roberts@example.com",
    gender: "Male",
    profileImage: "/profileImages/Cody_Fisher.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 55,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Bessie Cooper",
    subject: "Social studies",
    class: "3",
    email: "felicia.reid@example.com",
    gender: "Male",
    profileImage: "/profileImages/Bessie_Cooper.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 32,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Leslie Alexander",
    subject: "Home economics",
    class: "1",
    email: "tim.jennings@example.com",
    gender: "Female",
    profileImage: "/profileImages/Leslie_Alexander.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 30,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Kristin Watson",
    subject: "Chemistry",
    class: "2",
    email: "michelle.rivera@example.com",
    gender: "Female",
    profileImage: "/profileImages/Kristin_Watson.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 30,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Marvin McKinney",
    subject: "French",
    class: "3",
    email: "debbie.baker@example.com",
    gender: "Male",
    profileImage: "/profileImages/Marvin_McKinney.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 40,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Jane Cooper",
    subject: "Math",
    class: "1",
    email: "kenzi.lawson@example.com",
    gender: "Female",
    profileImage: "/profileImages/Jane_Cooper.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 25,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Cody Fisher",
    subject: "English",
    class: "2",
    email: "nathan.roberts@example.com",
    gender: "Male",
    profileImage: "/profileImages/Cody_Fisher.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 32,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Bessie Cooper",
    subject: "Social studies",
    class: "3",
    email: "felicia.reid@example.com",
    gender: "Male",
    profileImage: "/profileImages/Bessie_Cooper.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 28,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Leslie Alexander",
    subject: "Home economics",
    class: "1",
    email: "tim.jennings@example.com",
    gender: "Female",
    profileImage: "/profileImages/Leslie_Alexander.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 23,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Kristin Watson",
    subject: "Chemistry",
    class: "2",
    email: "michelle.rivera@example.com",
    gender: "Female",
    profileImage: "/profileImages/Kristin_Watson.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 36,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Marvin McKinney",
    subject: "French",
    class: "3",
    email: "debbie.baker@example.com",
    gender: "Male",
    profileImage: "/profileImages/Marvin_McKinney.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 33,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Jane Cooper",
    subject: "Math",
    class: "1",
    email: "kenzi.lawson@example.com",
    gender: "Female",
    profileImage: "/profileImages/Jane_Cooper.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 45,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Cody Fisher",
    subject: "English",
    class: "2",
    email: "nathan.roberts@example.com",
    gender: "Male",
    profileImage: "/profileImages/Cody_Fisher.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 55,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Bessie Cooper",
    subject: "Social studies",
    class: "3",
    email: "felicia.reid@example.com",
    gender: "Male",
    profileImage: "/profileImages/Bessie_Cooper.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 32,
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Leslie Alexander",
    subject: "Home economics",
    class: "1",
    email: "tim.jennings@example.com",
    gender: "Female",
    profileImage: "/profileImages/Leslie_Alexander.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    age: 30,
    phoneNumber: "010-1234-5678",
  },
];

const STUDENTS_DATA = [
  {
    name: "Eneh Mercy",
    class: "JSS 2",
    email: "michelle.rivera@example.com",
    id: 703703,
    gender: "Female",
    profileImage: "/profileImages/Eneh_Mercy.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Marvin McKinney",
    class: "JSS 3",
    email: "kenzi.lawson@example.com",
    id: 877037,
    gender: "Female",
    profileImage: "/profileImages/Marvin_McKinney.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Brooklyn Simmons",
    class: "SS 3",
    email: "nathan.roberts@example.com",
    id: 370357,
    gender: "Female",
    profileImage: "/profileImages/Brooklyn_Simmons.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Dianne Russell",
    class: "SS 3",
    email: "felicia.reid@example.com",
    id: 870316,
    gender: "Male",
    profileImage: "/profileImages/Dianne_Russell.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Cody Fisher",
    class: "SS 3",
    email: "tim.jennings@example.com",
    id: 547030,
    gender: "Female",
    profileImage: "/profileImages/Cody_Fisher.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Guy Hawkins",
    class: "JSS 1",
    email: "alma.lawson@example.com",
    id: 270374,
    gender: "Female",
    profileImage: "/profileImages/Guy_Hawkins.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Devon Lane",
    class: "JSS 3",
    email: "debra.holt@example.com",
    id: 970322,
    gender: "Female",
    profileImage: "/profileImages/Devon_Lane.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Ronald Richards",
    class: "JSS 4",
    email: "deanna.curtis@example.com",
    id: 570336,
    gender: "Male",
    profileImage: "/profileImages/Ronald_Richards.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Bessie Cooper",
    class: "JSS 5",
    email: "jackson.graham@example.com",
    id: 570356,
    gender: "Female",
    profileImage: "/profileImages/Bessie_Cooper.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Savannah Nguyen",
    class: "JSS 1",
    email: "dolores.chambers@example.com",
    id: 177037,
    gender: "Female",
    profileImage: "/profileImages/Savannah_Nguyen.png",
    about:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    phoneNumber: "010-1234-5678",
  },
];
