import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import JoinFirstStep from "../component/JoinFirstStep";
import JoinSecondStep from "../component/JoinSecondStep";
import JoinThirdStep from "../component/JoinThirdStep";
import ProgressBar from "../component/ProgressBar";

const Body = styled.body`
  background: #fcfafa;
  height: 100vh;
`;

// const Container = styled.div``;
const Container = styled.div``;

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

  const submitSignup = (id: string, password: string) => {
    axios
      .post("http://15.164.100.35:12044/admin/sign-up", {
        admin_name: id,
        admin_pwd: password,
        school_code: schoolCode,
      })
      .then((response) => {
        console.log("signup response", response);
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
        {/* <ProgressBar /> */}
      </Container>
    </Body>
  );
};

export default Join;
