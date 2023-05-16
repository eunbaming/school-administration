import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginForm from "../component/LoginForm";
import { login } from "../server/auth";

const Container = styled.div`
  width: 100vw;
  display: flex;
  padding-top: 16vh;
  align-items: center;
  background-color: #fcfafa;
  flex-direction: column;
`;

const Title = styled.div`
text-align: center;
height: 100px;
  font-size: 36px;
  font-weight: 600;
  font-family: "KumbhSans-SemiBold";
`;

const Login = () => {
  const [type, setType] = useState("user");
  const { schools } = useSelector((state: any) => state.school);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("currentTab", "dashboard");
  }, []);

    
    const selectType = (selectedType: string) => {
        if(selectedType !== type) {
            setType(selectedType);
        }
    }    

    const submitLoginForm = (event: any, id: string, password: string, school?: string) => {
        
        event.preventDefault();

        if(id.length > 0 && password.length > 0) {

            console.log("submitLoginForm type admin");

           
           login(id, password).then((response: any) => {

            console.log("login response", response)
            if(response.data.message === '존재하지 않는 유저입니다.') {
                alert('존재하지 않는 계정입니다.')
            } else if(response.data.message === '비밀번호가 일치하지 않습니다.') {
              alert('비밀번호가 일치하지 않습니다.')
            } else if(response.data.refreshToken && response.data.accessToken){
                
                localStorage.setItem('refreshToken', response.data.refreshToken)
                localStorage.setItem('accessToken', response.data.accessToken)
                navigate('dashboard');
            }
           })
           .catch((error) => {
            console.log("login failed", error)
           })        
        }
    }


  const navigateSignUp = () => {
    navigate("join");
  };

  return (
    <Container>
      <Title>환영합니다!<br/> 학교 관리 프로그램 입니다.</Title>
      <LoginForm
        schools={schools}
        type={type}
        selectType={selectType}
        navigateSignUp={navigateSignUp}
        submitLoginForm={submitLoginForm}
      />
    </Container>
  );
};

export default Login;
