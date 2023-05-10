import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import JoinFirstStep from "../component/JoinFirstStep";
import JoinSecondStep from "../component/JoinSecondStep";
import JoinThirdStep from "../component/JoinThirdStep";
import ProgressBar from "../component/ProgressBar";

import { signup } from "../server/auth";


const Body = styled.body`
  background: #fcfafa;
  height: 100vh;
`;

// const Container = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Join = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [schoolCode, setSchoolCode] = useState(1);

  const onChangeId = (e: any) => {
    setId(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const submitSignup = (e: any, id: string, password: string) => {
    e.preventDefault();

    
    signup(id, password)
    .then((response) => {
      console.log("signup response", response);
      if(response.data.message === "이미 사용중인 이메일입니다.") {
        alert("The ID that already exists");
      } else if(response.data.message === '어드민 생성 성공') {
        //localStorage.setItem("refreshToken", response.data.data.refreshToken);
        //localStorage.setItem("accessToken", response.data.data.accessToken);
        setCurrentStep(3);
      }
    })
    .catch((error) => {
      console.log("signup error", error);
    });
  };

  return (
    <Body>
      <Container>
        {currentStep === 1 && (
          <JoinFirstStep
            id={id}
            onChangeId={onChangeId}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 2 && (
          <JoinSecondStep
            password={password}
            id={id}
            onChangePassword={onChangePassword}
            setCurrentStep={setCurrentStep}
            submitSignup={submitSignup}
          />
        )}
        {currentStep === 3 && <JoinThirdStep />}
        <ProgressBar currentStep={currentStep} />
      </Container>
    </Body>
  );
};

export default Join;
