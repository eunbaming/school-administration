import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

import JoinFirstStep from "../component/JoinFirstStep";
import JoinSecondStep from "../component/JoinSecondStep";
import JoinThirdStep from "../component/JoinThirdStep";
import ProgressBar from "../component/ProgressBar";

import { POST_signup } from "../server/auth";


const Body = styled.body`
  background: #fcfafa;
  width: 100vw;
  padding-top: 16vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const Container = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Join = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState<any>({school_id: 'default', school_name: ""});

  const onChangeId = (e: any) => {
    setId(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const submitSignup = (e: any, id: string, password: string) => {
    e.preventDefault();

    
    POST_signup(id, password, school.school_id)
    .then((response) => {
      console.log("signup response", response);
      if(response.data.message === "이미 사용중인 이메일입니다.") {
        alert("The ID that already exists");
      } else if(response.data.message === '어드민 회원가입 성공') {
        //localStorage.setItem("refreshToken", response.data.data.refreshToken);
        //localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("current_school", JSON.stringify(school));
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
          schoolId={school.school_id}
          setSchool={setSchool}
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
