import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Hr = styled.hr`
  width: 500px;
  border: 2px solid #dcdcdc;
`;

const ProgressBar = () => {
  return (
    <Container>
      <Hr></Hr>
    </Container>
  );
};

export default ProgressBar;
