import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import UserCounter from "../component/UserCounter";
import GenderRatioGraph from './GenderRatioGraph';

const Container = styled.div`
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

interface props {
    teachers: any
}

const TeachersDataAnalysis = ({teachers}: props) => {
    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);

    useEffect(() => {


    }, [])



    return (
        <Container>
            <TitleDiv>
                Teachers
            </TitleDiv>
            <UserCounter
            count={teachers.length}/>

            <GenderRatioGraph
            // eslint-disable-next-line array-callback-return
            femaleCount={10}
            // eslint-disable-next-line array-callback-return
            maleCount={14}
            />

        </Container>

    )
}

export default TeachersDataAnalysis