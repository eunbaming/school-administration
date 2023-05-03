import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import Layout from '../component/Layout';
import Teachers from '../pages/Teachers';
import Students from '../pages/Students';
import Teacherdetail from '../pages/TeacherDetail';
import { getTeachers } from '../server/teachers';
import {addTeachers} from "../redux/teachers/state";

const Dashboard = () => {
    const [currentTab, setCurrentTab] = useState(localStorage.getItem("currentTab") !== null ? localStorage.getItem("currentTab") : "dashboard");
    const {teachers} = useSelector((state: any) => state.teacher);
    const dispatch = useDispatch(); 

    useEffect(() => {
        //getTeachers();
        dispatch(addTeachers(TEACHERS_DATA));
    }, [])

    const changeCurrentTab = (tab: string) => {
        setCurrentTab(tab);
        localStorage.setItem("currentTab", tab);
    }

    return (
        <Layout
        currentTab={currentTab}
        changeCurrentTab={changeCurrentTab}>
        <Routes>
            <Route path="teachers/*" element={<Teachers teacherArr={teachers}/>}/>
            <Route path="teachers/:teacher" element={<Teacherdetail teacher={TEACHERS_DATA[0]}/>}/>
            <Route path="students" element={<Students/>}/>
        </Routes>
        </Layout>
    )
}

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
        phoneNumber: "010-1234-5678"
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
        phoneNumber: "010-1234-5678"
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
        phoneNumber: "010-1234-5678"
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
        phoneNumber: "010-1234-5678"
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
        phoneNumber: "010-1234-5678"
    },{
        name: "Leslie Alexander",
        subject: "Home economics",
        class: "1",
        email: "tim.jennings@example.com",
        gender: "Female",
        profileImage: "/profileImages/Leslie_Alexander.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 23,
        phoneNumber: "010-1234-5678"
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
        phoneNumber: "010-1234-5678"
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
        phoneNumber: "010-1234-5678"
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
        phoneNumber: "010-1234-5678"
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
        phoneNumber: "010-1234-5678"
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
        phoneNumber: "010-1234-5678"
    },{
        name: "Leslie Alexander",
        subject: "Home economics",
        class: "1",
        email: "tim.jennings@example.com",
        gender: "Female",
        profileImage: "/profileImages/Leslie_Alexander.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 30,
        phoneNumber: "010-1234-5678"
    }
]