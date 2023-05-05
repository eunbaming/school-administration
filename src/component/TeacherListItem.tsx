import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface TeacherItemProps {
    index: number,
    curTeacherIndex: number,
}

const Container = styled.div<TeacherItemProps>`
width: 60vw;
display: flex;
flex: 1;    
text-decoration: none;
color: #4f4f4f;
font-size: 14px;
line-height: 15px;
letter-spacing: 0em;


background-color: ${(props) => props.index === props.curTeacherIndex ? '#509CDB' : props.index % 2 === 0 ? '#F3FAFF' : '#ffffff'};
user-select: none;
`;

const NameDiv = styled.span`
flex: 1;
padding: 12px 8px;
font-family: 'KumbhSans-Regular';
display: flex;
align-items: center;
`;

const ProfileImg = styled.img`
margin-right:11px;
  border-radius: 100px;
  width: 24px;
  height: 24px;  
`;

const SubjectDiv = styled.span`
flex: 1;
padding: 16px 8px;
font-family: 'KumbhSans-Regular';

`

const ClassDiv = styled.span`
flex: 1;
padding: 16px 8px;
font-family: 'KumbhSans-Regular';
`


const GenderDiv = styled.span`
flex: 1;
padding: 16px 8px;
font-family: 'KumbhSans-Regular';
`

const EmailDiv = styled.span`
flex: 1.5;
padding: 16px 8px;
font-family: 'KumbhSans-Regular';
`





interface props {
    curTeacherIndex: number,
    teacher: any,
    selectTeacherListItem: (index: number) => void,
    index: number,
}

const TeacherListItem = ({teacher, selectTeacherListItem, index, curTeacherIndex}: props) => {
    return (
        <Container
        index={index}
        curTeacherIndex={curTeacherIndex}
        onClick={() => selectTeacherListItem(index)}>
            <NameDiv>
                <ProfileImg
                src={teacher.profileImage}/>
                {teacher.name}
            </NameDiv>
            <SubjectDiv>
                {teacher.subject}
            </SubjectDiv>
            <ClassDiv>
                {teacher.class}
            </ClassDiv>
            <GenderDiv>
                {teacher.gender}
            </GenderDiv>
            {/*
            <EmailDiv>
                {teacher.email}
            </EmailDiv>
            */}
        </Container>

    )

}

export default TeacherListItem;