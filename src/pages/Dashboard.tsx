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
  
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [stuMaleCount, setStuMaleCount] = useState(0);
  const [stuFemaleCount, setStuFemaleCount] = useState(0);

  const [koreanNum, setKoreanNum] = useState(0);
  const [englishNum, setEnglishNum] = useState(0);
  const [mathNum, setMathNum] = useState(0);
  const [societyNum, setSocietyNum] = useState(0);
  const [scienceNum, setScienceNum] = useState(0);

  const { students } = useSelector((state: any) => state.student);
  const {teachers} = useSelector((state: any) => state.teacher);

  console.log("Dashboard teachers", teachers);

  const school = localStorage.getItem("current_school");

  console.log(school !== null ? JSON.parse(school) : "")

  useLayoutEffect(() => {

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

    setMaleCount(maleNum);
    setFemaleCount(femaleNum);

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

    setStuFemaleCount(student_femaleNum);
    setStuMaleCount(student_maleNum);

    setKoreanNum(teachers.reduce((acc: any, item: any) => {
      return acc + (item.subject === 1)
    }, 0))

    setEnglishNum(teachers.reduce((acc: any, item: any) => {
      return acc + (item.subject === 2)
    }, 0))

    setMathNum(teachers.reduce((acc: any, item: any) => {
      return acc + (item.subject === 3)
    }, 0));

    setSocietyNum(teachers.reduce((acc: any, item: any) => {
      return acc + (item.subject === 4)
    }, 0));

    setScienceNum(teachers.reduce((acc: any, item: any) => {
      return acc + (item.subject === 5)
    }, 0))



  

    
  }, [teachers, students])





  /*
  const onClickAddUser = (type: string) => {
    if (type === "Teachers") {
      navigate("teachers");
      setCurrentTab("teachers");
      localStorage.setItem("currentTab", "teachers");
    } else if (type === "Students") {
      navigate("students");
      setCurrentTab("students");
      localStorage.setItem("currentTab", "students");
    }
  }
  */

  return (
    <Layout>
      <Container>
        <TitleDiv>
          {school !== null ? JSON.parse(school).school_name + " " : ""}
           관리자님 환영합니다.</TitleDiv>
        <Body>
         <TeachersDataAnalysis
         teachers={teachers}
         femaleCount={femaleCount}
         maleCount={maleCount}
         subjectNum={{korean: koreanNum, english: englishNum, math: mathNum, society: societyNum, science: scienceNum}}/>
         <StudentsDataAnalysis
         students={students}
         femaleCount={stuFemaleCount}
         maleCount={stuMaleCount}/>
        </Body>
      </Container>
    </Layout>
  );
};

export default Dashboard;





