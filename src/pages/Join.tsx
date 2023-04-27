import React, { useState } from "react";
import styled from "styled-components";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import JoinFirstStep from "../component/JoinFirstStep";
import JoinSecondStep from "../component/JoinSecondStep";

const Body = styled.body`
  background: #f1f1f1;
  height: 100vh;
`;

const Button = styled.button`
  width: 225px;
  // margin: 15px;
  padding: 10px;
  border: none;
  background-color: #2d88d4;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Container = styled.div``;

const Join = () => {
  return (
    <Body>
      <Container>
        <JoinFirstStep />
      </Container>
    </Body>
  );
};

export default Join;
