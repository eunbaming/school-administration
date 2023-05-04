import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // hi
  position: relative;
  bottom: 70px;
`;

// const Hr = styled.hr`
//   width: 700px;
//   border: 2px solid #dcdcdc;
// `;

// const StepOne = styled.div`
//   position: absolute;
//   top: 0;
//   left: 20%;
//   border: 1px solid #2d88d4;
//   background-color: #2d88d4;
//   border-radius: 50%;
//   width: 15px;
//   height: 15px;
// `;

const Steps = styled.div``;

const CircleActive = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: #8fa9f1;
  border-radius: 50%;
`;

const Circle = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: #ddd;
  border-radius: 50%;
`;

const Progress = styled.div``;

const Indicator = styled.span``;

const ProgressBar = () => {
  const [currentProgress, setCurrentProgress] = useState(1);
  const circle = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLSpanElement>(null);

  return (
    <Container>
      <Steps ref={circle}>
        <CircleActive></CircleActive>
        <Circle></Circle>
        <Circle></Circle>
        <Progress>
          <Indicator ref={progressBar}></Indicator>
        </Progress>
      </Steps>
    </Container>
  );
};

export default ProgressBar;
