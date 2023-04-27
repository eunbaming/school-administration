import React, { useState } from "react";
import styled from "styled-components";
import JoinSecondStep from "./JoinSecondStep";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
`;

const Header = styled.h1`
  color: #4f4f4f;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 450px;
  height: 400px;
  margin-top: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const EnterName = styled.input`
  width: 200px;
  margin: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SelectSchool = styled.select`
  width: 225px;
  margin: 15px;
  padding: 10px;
  border-color: #ddd;
  border-radius: 5px;
  color: #6c6c6c;
`;

const Option = styled.option`
  color: #ddd;
`;

const Explanation = styled.p`
  text-align: center;
  color: #6c6c6c;
  margin-top: 80px;
`;

const Button = styled.button`
  width: 225px;
  margin: 15px;
  padding: 10px;
  border: none;
  background-color: #2d88d4;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const Login = styled.div``;

const Span = styled.span`
  color: #6c6c6c;
  font-size: 13px;
`;

const LoginButton = styled.button`
  border: none;
  background: none;
  color: #2d88d4;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
`;


const JoinFirstStep = () => {
  const navigate = useNavigate();
  const [secondStep, setSecondStep] = useState(false);

  const goToSecondStep = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSecondStep(true);
  };

  return (
    <Container>
      <Header>Welcome, create your school account</Header>
      <Main>
        <Explanation>
          It is our great pleasure to have <br /> you on board!
        </Explanation>
        <Form onSubmit={(event) => goToSecondStep(event)}>
          <EnterName placeholder="Enter the name of admin"></EnterName>
          <SelectSchool name="select">
            <Option value="1">Select the name of school</Option>
            <Option value="2">선택 1</Option>
            <Option value="3">선택 2</Option>
          </SelectSchool>
          <Button type="submit">Next</Button>
          {secondStep && <JoinSecondStep />}
        </Form>
        <Login>
          <Span>Already have an account?</Span>
          <LoginButton>Login</LoginButton>
        </Login>
      </Main>
    </Container>
  );
};

export default JoinFirstStep;
