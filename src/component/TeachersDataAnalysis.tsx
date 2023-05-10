import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import UserCounter from "../component/UserCounter";
import GenderRatioGraph from './GenderRatioGraph';
import SubjectRatioCircleGraph from './SubjectRatioCircleGraph';
import SimpleProfileItem from './SimpleProfileItem';

const Container = styled.div`
background-color: white;
border-radius: 5px;
padding: 20px;
width: 34.5vw;
height: 70vh;
box-shadow: 0px 0px 100px 5px #27272710;
display: flex;
flex-direction: row;
`;

const TitleDiv = styled.div`
width: 100%;
font-family: "KumbhSans-SemiBold";
font-size: 20px;
font-weight: 600;
color: #282828;    
`;

const DataAnalysisDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProfileListDiv = styled.div`
flex: 1;
overflow: scroll;
padding-left: 2rem;
padding-right: 0rem;
`;

interface props {
    teachers: any;
    femaleCount: number;
    maleCount: number;
    subjectNum: any;
}

const TeachersDataAnalysis = ({teachers, femaleCount, maleCount, subjectNum}: props) => {

    return (
        <Container>
            <DataAnalysisDiv>
            <TitleDiv>
                선생님
            </TitleDiv>
            <UserCounter
            type={'teacher'}
            count={teachers.length}/>
            <GenderRatioGraph
            femaleCount={femaleCount}
            maleCount={maleCount}
            />
            <SubjectRatioCircleGraph
            korean={subjectNum.korean}
            english={subjectNum.english}
            math={subjectNum.math}
            society={subjectNum.society}
            science={subjectNum.science}
            entire={teachers.length}
            />
            </DataAnalysisDiv>
            <ProfileListDiv>
                {teachers.map((item: any) => {
                    return (
                        <SimpleProfileItem
                        key={item.id}
                        teacher={item}/>
                    )
                })}
            </ProfileListDiv>
        </Container>

    )
}

export default TeachersDataAnalysis