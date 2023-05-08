import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin-left: 1rem;
background-color: white;
border-radius: 5px;
padding: 20px;
width: 34.5vw;
height: 70vh;
box-shadow: 0px 0px 100px 5px #27272710;
`;

const TitleDiv = styled.div`
font-family: "KumbhSans-SemiBold";
font-size: 20px;
color: #282828;    
`;

const StudentsDataAnalysis = () => {
    return (
        <Container>
            <TitleDiv>
                Students
            </TitleDiv>

        </Container>

    )
}

export default StudentsDataAnalysis