import React, { useState, useEffect } from "react";
import styled from 'styled-components';
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

  const { students } = useSelector((state: any) => state.student);
  const {teachers} = useSelector((state: any) => state.teacher)

  const dispatch = useDispatch();
  const navigate = useNavigate();




  /*
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
  */

  return (
    <Layout>
      <Container>
        <TitleDiv>
        Welcome to your dashboard, Udemy school
        </TitleDiv>
        <Body>
         <TeachersDataAnalysis
         teachers={teachers}/>
         <StudentsDataAnalysis/>
            {/*
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
        */}
        </Body>
      </Container>
    </Layout>
  );
};

export default Dashboard;




