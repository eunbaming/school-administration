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
  transform: translate(-50%, -45%);
`;

const Header = styled.h1`
  color: #4f4f4f;
  font-weight: 600;
  font-size: 36px;
  font-family: "KumbhSans";
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 512px;
  height: 395px;
  margin-top: 30px;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const EnterName = styled.input`
  width: 248px;
  height: 42px;
  padding: 10px;
  box-sizing: border-box;
  border: 0.5px solid #a7a7a7;
  border-radius: 5px;
  position: absolute;
  top: 161px;
  left: 132px;
`;

const SelectSchool = styled.select`
  width: 248px;
  height: 42px;
  padding: 10px;
  box-sizing: border-box;
  border: 0.5px solid #a7a7a7;
  border-radius: 5px;
  color: #6c6c6c;
  position: absolute;
  top: 226px;
  left: 133px;
`;

const Option = styled.option``;

const Explanation = styled.p`
  text-align: center;
  color: #6c6c6c;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  position: absolute;
  top: 55px;
  left: 132px;
`;

const Button = styled.button`
  width: 248px;
  height: 42px;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  background-color: #2d88d4;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 296px;
  left: 133px;
`;

const Login = styled.div`
  position: absolute;
  top: 352px;
  left: 132px;
  width: 253px;
  text-align: center;
`;

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

interface props {
  setCurrentStep: (value: number) => void;
  id: string;
  onChangeId: any;
}

const JoinFirstStep = ({ setCurrentStep, id, onChangeId }: props) => {
  

  return (
    <Container>
      <Header>Welcome, create your school account</Header>
      <Main>
        <Explanation>
          It is our great pleasure to have <br /> you on board!
        </Explanation>
        <Form onSubmit={() => setCurrentStep(2)}>
          <EnterName placeholder="Enter the name of admin" value={id} onChange={(e: any) => onChangeId(e)}></EnterName>
          <SelectSchool name="select">
            <Option value="default">Select the name of school</Option>
            <Option value="1">school 1 </Option>
            <Option value="2">school 2</Option>
          </SelectSchool>
          <Button type="submit">Next</Button>
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
