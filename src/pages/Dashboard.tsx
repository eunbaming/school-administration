import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import Layout from '../component/Layout';
import Teachers from '../pages/Teachers';
import Students from '../pages/Students';
import Teacherdetail from '../pages/TeacherDetail';


const Dashboard = () => {
    const [currentTab, setCurrentTab] = useState("dashboard"); 

    const changeCurrentTab = (tab: string) => {
        setCurrentTab(tab);
    }

    return (
        <Layout
        currentTab={currentTab}
        changeCurrentTab={changeCurrentTab}>
        <Routes>
            <Route path="teachers/*" element={<Teachers teacherArr={TEACHERS_DATA}/>}/>
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
        age: 30
    },
    {
        name: "Marvin McKinney",
        subject: "French",
        class: "3",
        email: "debbie.baker@example.com",
        gender: "Male",
        profileImage: "/profileImages/Marvin_McKinney.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 40
    },
    {
        name: "Jane Cooper",
        subject: "Math",
        class: "1",
        email: "kenzi.lawson@example.com",
        gender: "Female",
        profileImage: "/profileImages/Jane_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 25
    },
    {
        name: "Cody Fisher",
        subject: "English",
        class: "2",
        email: "nathan.roberts@example.com",
        gender: "Male",
        profileImage: "/profileImages/Cody_Fisher.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 32
    },
    {
        name: "Bessie Cooper",
        subject: "Social studies",
        class: "3",
        email: "felicia.reid@example.com",
        gender: "Male",
        profileImage: "/profileImages/Bessie_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 28
    },{
        name: "Leslie Alexander",
        subject: "Home economics",
        class: "1",
        email: "tim.jennings@example.com",
        gender: "Female",
        profileImage: "/profileImages/Leslie_Alexander.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 23
    },
    {
        name: "Kristin Watson",
        subject: "Chemistry",
        class: "2",
        email: "michelle.rivera@example.com",
        gender: "Female",
        profileImage: "/profileImages/Kristin_Watson.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 36
    },
    {
        name: "Marvin McKinney",
        subject: "French",
        class: "3",
        email: "debbie.baker@example.com",
        gender: "Male",
        profileImage: "/profileImages/Marvin_McKinney.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 33
    },
    {
        name: "Jane Cooper",
        subject: "Math",
        class: "1",
        email: "kenzi.lawson@example.com",
        gender: "Female",
        profileImage: "/profileImages/Jane_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 45
    },
    {
        name: "Cody Fisher",
        subject: "English",
        class: "2",
        email: "nathan.roberts@example.com",
        gender: "Male",
        profileImage: "/profileImages/Cody_Fisher.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 55
    },
    {
        name: "Bessie Cooper",
        subject: "Social studies",
        class: "3",
        email: "felicia.reid@example.com",
        gender: "Male",
        profileImage: "/profileImages/Bessie_Cooper.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 32
    },{
        name: "Leslie Alexander",
        subject: "Home economics",
        class: "1",
        email: "tim.jennings@example.com",
        gender: "Female",
        profileImage: "/profileImages/Leslie_Alexander.png",
        about: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        age: 30
    }
]