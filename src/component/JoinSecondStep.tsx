import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  height: 354px;
  margin-top: 30px;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const ChoosePasswordInput = styled.input`
  position: absolute;
  top: 73px;
  left: 134px;
  width: 248px;
  height: 42px;
  padding: 10px;
  box-sizing: border-box;
  border: 0.5px solid #a7a7a7;
  border-radius: 5px;
`;

const ConfirmPasswordInput = styled.input`
  position: absolute;
  top: 159px;
  left: 134px;
  width: 248px;
  height: 42px;
  padding: 10px;
  box-sizing: border-box;
  border: 0.5px solid #a7a7a7;
  border-radius: 5px;
`;

const ChoosePasswordLabel = styled.label`
  position: absolute;
  top: 44px;
  left: 139px;
  color: #667085;
`;

const ConfirmPasswordLabel = styled.label`
  position: absolute;
  top: 130px;
  left: 142px;
  color: #8a8a8a;
  font-size: 14px;
`;

const Message = styled.p`
  position: absolute;
  top: 200px;
  left: 139px;
  font-size: 12px;
  font-weight: 400;
  color: #667085;
`;

const Button = styled.button`
  position: absolute;
  top: 252px;
  left: 134px;
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
`;

interface props {
  setCurrentStep: (value: number) => void;
}

const JoinSecondStep = ({ setCurrentStep }: props) => {
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(false);

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
    setWarning(event.target.value.length < 8);
  };

  return (
    <Container>
      <Header>Udemy school, Choose your password</Header>
      <Main>
        <Form onSubmit={() => setCurrentStep(3)}>
          <ChoosePasswordLabel htmlFor="choose">
            Choose a password
          </ChoosePasswordLabel>
          <ChoosePasswordInput
            type="password"
            id="choose"
            onChange={(event) => handlePasswordChange(event)}
          />
          <ConfirmPasswordLabel htmlFor="confirm">
            Confirm password
          </ConfirmPasswordLabel>
          <ConfirmPasswordInput type="password" id="confirm" />

          {warning && <Message>Must be at least 8 characters.</Message>}
          <Button>Next</Button>
        </Form>
      </Main>
    </Container>
  );
};

export default JoinSecondStep;
