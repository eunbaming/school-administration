import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100px;
text-align: center;
  font-weight: 600;
  font-size: 36px;
  font-family: "KumbhSans-SemiBold";
`;

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #fff;
  margin-top: 30px;
  width: 31rem;
  height: 23rem;
position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ChoosePasswordInput = styled.input`
  width: 248px;
  height: 42px;
  padding: 10px;
  box-sizing: border-box;
  border: 0.5px solid #a7a7a7;
  border-radius: 5px;
`;

const ConfirmPasswordInput = styled.input`
margin-top: 14px;
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

interface ButtonProps {
  isVaild: boolean;
}

const Button = styled.button<ButtonProps>`
margin-top: 20px;
  width: 248px;
  height: 42px;
  padding: 10px;
  box-sizing: border-box;
  border: none; 
  background-color: ${(props: any) => props.isVaild ? '#2D88D4' : '#BCBCBC'};
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = styled.div`
margin-top: 14px;
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
  password: string;
  onChangePassword: any;
  submitSignup: (e: any, id: string, password: string) => void;
}

const JoinSecondStep = ({
  setCurrentStep,
  id,
  password,
  onChangePassword,
  submitSignup,
}: props) => {
  const [warning, setWarning] = useState(false);
  const [isVaild, setIsVaild] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if(password.length > 0 && confirmPassword.length > 0 && password === confirmPassword) {
      setIsVaild(true)
    } else {
      setIsVaild(false);
    }

  }, [password, confirmPassword])

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setWarning(event.target.value.length < 8);
  };

  return (
    <Container>
      <Header>학교 관리자 계정을 생성하세요.</Header>
      <Main>
        <Form onSubmit={(e: any) => submitSignup(e, id, password)}>
          <ChoosePasswordInput
            type="password"
            id="choose"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(event) => onChangePassword(event)}
          />
          <ConfirmPasswordInput 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password" 
          id="confirm" 
          placeholder="비밀번호 확인"
          />

          {warning && <Message>Must be at least 8 characters.</Message>}
          <Button
          isVaild={isVaild}
          disabled={!isVaild}
          type={"submit"}>회원 가입</Button>
        </Form>
        <Login>
          <Span>{" "}</Span>
          <LoginButton
          >{" "}</LoginButton>
        </Login>
      </Main>
    </Container>
  );
};

export default JoinSecondStep;
