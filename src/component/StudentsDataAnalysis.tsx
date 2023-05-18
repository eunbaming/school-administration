import React from 'react';
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
overflow-y: auto;
overflow-x: hidden;
padding-left: 2rem;
padding-right: 0rem;
::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
`;

interface props {
    students: any;
    femaleCount: number;
    maleCount: number;
}

const StudentsDataAnalysis = ({students, femaleCount, maleCount}: props) => {
    return (
        <Container>
            <DataAnalysisDiv>
            <TitleDiv>
                학생
            </TitleDiv>
            <UserCounter
            type={'student'}
            count={10}/>
            <GenderRatioGraph
            femaleCount={femaleCount}
            maleCount={maleCount}
            />
            <SubjectRatioCircleGraph
            dataArr={[{name: "", num: 0}, {name: "", num: 0}, {name: "", num: 0}, {name: "", num: 0}, {name: "", num: 0}]}
            entire={students.length}
            />
            </DataAnalysisDiv>
            <ProfileListDiv>
                {students.map((item: any) => {
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

export default StudentsDataAnalysis