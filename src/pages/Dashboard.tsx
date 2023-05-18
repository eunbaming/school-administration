import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Layout from "../component/Layout";
import Teachers from "../pages/Teachers";
import Students from "../pages/Students";



import TeachersDataAnalysis from "../component/TeachersDataAnalysis";
import StudentsDataAnalysis from "../component/StudentsDataAnalysis";

import AddUserButton from "../component/AddUserButton";
import BankIconPNG from '../assets/icons/bank_blue.png';
import StudentIconPNG from '../assets/icons/student_blue.png';

const Container = styled.div`
padding: 3rem 3rem 3rem 3rem;
background-color: #FCFAFA;
`;

const TitleDiv = styled.div`
  font-family: "KumbhSans-SemiBold";
  font-size: 36px;
  font-weight: 600;
`;

const Body = styled.span`
margin-top: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
    
`

const Dashboard = () => {
  

  const { students, stuMaleNum, stuFemaleNum } = useSelector((state: any) => state.student);
  const {teachers, maleNum, femaleNum, koreanNum, englishNum, mathNum, societyNum, scienceNum, totalNum} = useSelector((state: any) => state.teacher);

  console.log("Dashboard teachers", teachers);

  const school = localStorage.getItem("current_school");

  console.log(school !== null ? JSON.parse(school) : "")

  return (
    <Layout>
      <Container>
        <TitleDiv>
          {school !== null ? JSON.parse(school).school_name + " " : ""}
           관리자님 환영합니다.</TitleDiv>
        <Body>
         <TeachersDataAnalysis
         teachers={teachers}
         femaleCount={femaleNum}
         maleCount={maleNum}
         subjectNumArr={[{name: '국어',num: koreanNum}, {name: '영어', num: englishNum}, {name: '수학', num: mathNum}, {name: '사회', num: societyNum}, {name: '과학', num: scienceNum}].sort((a, b) => b.num - a.num)}
         totalNum={totalNum}/>
         <StudentsDataAnalysis
         students={students}
         femaleCount={stuFemaleNum}
         maleCount={stuMaleNum}/>
        </Body>
      </Container>
    </Layout>
  );
};

export default Dashboard;





