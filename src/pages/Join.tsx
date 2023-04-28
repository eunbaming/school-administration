import React, { useState } from "react";
import styled from "styled-components";
import JoinFirstStep from "../component/JoinFirstStep";
import JoinSecondStep from "../component/JoinSecondStep";

const Body = styled.body`
  background: #fcfafa;
  height: 100vh;
`;

// const Container = styled.div``;
const Container = styled.div``;

const Join = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Body>
      <Container>
        {currentStep === 1 && <JoinFirstStep setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <JoinSecondStep />}
      </Container>
    </Body>
  );
};

export default Join;
