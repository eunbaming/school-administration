import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Layout from "../component/Layout";
import Teachers from "../pages/Teachers";
import Students from "../pages/Students";
import Teacherdetail from "../pages/TeacherDetail";
import AddUserButton from "../component/AddUserButton";
import { getTeachers } from "../server/teacher";
import { addTeachers, setFilteredTeachers } from "../redux/teachers/state";
import { addStudents } from "../redux/students/state";

import BankIconPNG from '../assets/icons/bank_blue.png';
import StudentIconPNG from '../assets/icons/student_blue.png';

const Container = styled.div`
  padding: 4rem;
`;

const TitleDiv = styled.div`
  font-family: "KumbhSans-SemiBold";
  font-size: 36px;
  font-weight: 600;
`;

const Body = styled.div`

margin-top: 100px;
    
`

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem("currentTab") !== null
      ? localStorage.getItem("currentTab")
      : "dashboard"
  );

  const { students } = useSelector((state: any) => state.student);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    //getTeachers();
    dispatch(addTeachers(TEACHERS_DATA));
    //dispatch(addStudents(STUDENTS_DATA));
    dispatch(setFilteredTeachers(TEACHERS_DATA));
    //dispatch(addStudents(STUDENTS_DATA));
  }, []);

  useEffect(() => {
    console.log("location", location)

    if(location.pathname === "/dashboard/teachers") {
        setCurrentTab('teachers')
    } else if(location.pathname === '/dashboard/students') {
        setCurrentTab('students');
    } else {
        setCurrentTab('dashboard')
    }

  }, [location])

  const changeCurrentTab = (tab: string) => {
    setCurrentTab(tab);
    localStorage.setItem("currentTab", tab);
  };

  const onClickAddUser = (type: string) => {
    if(type === 'Teachers') {
        navigate('teachers');
        setCurrentTab('teachers');
        localStorage.setItem('currentTab', 'teachers');
    } else if(type === 'Students') {
        navigate('students')
        setCurrentTab('students');
        localStorage.setItem('currentTab', 'students');
    }
  }

  return (
    <Layout currentTab={currentTab} changeCurrentTab={changeCurrentTab}>
      <Routes>
        <Route 
        path="teachers/*" 
        element={<Teachers/>} />
        <Route
          path="teachers/:teacher"
          element={<Teacherdetail teacher={TEACHERS_DATA[0]} />}
        />
        <Route path="students" element={<Students studentArr={students} />} />
      </Routes>

      <Container>
        <TitleDiv>
        Welcome to your dashboard, Udemy school
        </TitleDiv>
        <Body>

        <AddUserButton
        onClickAddUser={onClickAddUser}
        iconPNG={BankIconPNG}
        type={"Teachers"}
        />
        <AddUserButton
        onClickAddUser={onClickAddUser}
        iconPNG={StudentIconPNG}
        type={"Students"}
        />
        </Body>
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
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 30,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    },
    {
        name: "Marvin McKinney",
        subject: "French",
        class: "3",
        email: "debbie.baker@example.com",
        gender: "Male",
        profileImage: "/profileImages/Marvin_McKinney.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 40,
        phoneNumber: "01012345678",    
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Jane Cooper",
        subject: "Math",
        class: "1",
        email: "kenzi.lawson@example.com",
        gender: "Female",
        profileImage: "/profileImages/Jane_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 25,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Cody Fisher",
        subject: "English",
        class: "2",
        email: "nathan.roberts@example.com",
        gender: "Male",
        profileImage: "/profileImages/Cody_Fisher.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 32,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Bessie Cooper",
        subject: "Social studies",
        class: "3",
        email: "felicia.reid@example.com",
        gender: "Male",
        profileImage: "/profileImages/Bessie_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 28,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },{
        name: "Leslie Alexander",
        subject: "Home economics",
        class: "1",
        email: "tim.jennings@example.com",
        gender: "Female",
        profileImage: "/profileImages/Leslie_Alexander.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 23,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Kristin Watson",
        subject: "Chemistry",
        class: "2",
        email: "michelle.rivera@example.com",
        gender: "Female",
        profileImage: "/profileImages/Kristin_Watson.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 36,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Marvin McKinney",
        subject: "French",
        class: "3",
        email: "debbie.baker@example.com",
        gender: "Male",
        profileImage: "/profileImages/Marvin_McKinney.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 33,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Jane Cooper",
        subject: "Math",
        class: "1",
        email: "kenzi.lawson@example.com",
        gender: "Female",
        profileImage: "/profileImages/Jane_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 45,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Cody Fisher",
        subject: "English",
        class: "2",
        email: "nathan.roberts@example.com",
        gender: "Male",
        profileImage: "/profileImages/Cody_Fisher.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 55,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Bessie Cooper",
        subject: "Social studies",
        class: "3",
        email: "felicia.reid@example.com",
        gender: "Male",
        profileImage: "/profileImages/Bessie_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 32,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },{
        name: "Leslie Alexander",
        subject: "Home economics",
        class: "1",
        email: "tim.jennings@example.com",
        gender: "Female",
        profileImage: "/profileImages/Leslie_Alexander.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 30,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Kristin Watson",
        subject: "Chemistry",
        class: "2",
        email: "michelle.rivera@example.com",
        gender: "Female",
        profileImage: "/profileImages/Kristin_Watson.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 30,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Marvin McKinney",
        subject: "French",
        class: "3",
        email: "debbie.baker@example.com",
        gender: "Male",
        profileImage: "/profileImages/Marvin_McKinney.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 40,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Jane Cooper",
        subject: "Math",
        class: "1",
        email: "kenzi.lawson@example.com",
        gender: "Female",
        profileImage: "/profileImages/Jane_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 25,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Cody Fisher",
        subject: "English",
        class: "2",
        email: "nathan.roberts@example.com",
        gender: "Male",
        profileImage: "/profileImages/Cody_Fisher.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 32,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Bessie Cooper",
        subject: "Social studies",
        class: "3",
        email: "felicia.reid@example.com",
        gender: "Male",
        profileImage: "/profileImages/Bessie_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 28,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },{
        name: "Leslie Alexander",
        subject: "Home economics",
        class: "1",
        email: "tim.jennings@example.com",
        gender: "Female",
        profileImage: "/profileImages/Leslie_Alexander.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 23,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Kristin Watson",
        subject: "Chemistry",
        class: "2",
        email: "michelle.rivera@example.com",
        gender: "Female",
        profileImage: "/profileImages/Kristin_Watson.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 36,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Marvin McKinney",
        subject: "French",
        class: "3",
        email: "debbie.baker@example.com",
        gender: "Male",
        profileImage: "/profileImages/Marvin_McKinney.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 33,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Jane Cooper",
        subject: "Math",
        class: "1",
        email: "kenzi.lawson@example.com",
        gender: "Female",
        profileImage: "/profileImages/Jane_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 45,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Cody Fisher",
        subject: "English",
        class: "2",
        email: "nathan.roberts@example.com",
        gender: "Male",
        profileImage: "/profileImages/Cody_Fisher.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 55,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },
    {
        name: "Bessie Cooper",
        subject: "Social studies",
        class: "3",
        email: "felicia.reid@example.com",
        gender: "Male",
        profileImage: "/profileImages/Bessie_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 32,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    },{
        name: "Leslie Alexander",
        subject: "Home economics",
        class: "1",
        email: "tim.jennings@example.com",
        gender: "Female",
        profileImage: "/profileImages/Leslie_Alexander.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 30,
        phoneNumber: "01012345678",
        identificationNumber: '12345',
        password: '12345'
    
    }
]
