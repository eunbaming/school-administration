import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Explanation = styled.h1`
  margin: 40px;
  line-height: 45px;
  font-family: "KumbhSans-SemiBold";
  font-weight: 600;
  font-size: 36px;
  color: #4f4f4f;
  text-align: center;
`;

const Button = styled(Link)`
  height: 42px;
  margin-top: 35px;
  padding: 12px 65px;
  box-sizing: border-box;
  border: none;
  background-color: #2d88d4;
  color: #fff;
  border-radius: 4px;
  font-family: 'KumbhSans-SemiBold';
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`;

const JoinThirdStep = () => {
  return (
    <Container>
      <Header>축하합니다! 회원가입에 성공했습니다.</Header>
      <Main>
        <Explanation>
          학교 관리 화면으로<br/>
          이동하세요.
        </Explanation>
        <Button
        to={"/dashboard"}>메인 화면 이동</Button>
      </Main>
    </Container>
  );
};

export default JoinThirdStep;
