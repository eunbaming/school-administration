import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.h1`
  color: #4f4f4f;
  font-weight: 600;
  font-size: 36px;
  font-family: "KumbhSans-SemiBold";
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 512px;
  height: 354px;
  margin-top: 30px;
  padding: 40px;
  box-sizing: border-box;
`;

const Explanation = styled.h1`
  margin: 40px;
  line-height: 45px;
  font-family: "KumbhSans-SemiBold";
  font-weight: 600;
  font-size: 36px;
  color: #4f4f4f;
`;

const Button = styled(Link)`
  width: 248px;
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
      <Header>Udemy school, Sign Up Success</Header>
      <Main>
        <Explanation>
          Sign up success <br /> go to main page?
        </Explanation>
        <Button
        to={"/dashboard"}>go to main page</Button>
      </Main>
    </Container>
  );
};

export default JoinThirdStep;
