import React, {useState} from 'react';
import styled from 'styled-components';

import TeacherList from '../component/TeacherList';
import AddTeacherModal from '../component/AddTeacherModal';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
padding-top: 60px;
padding-bottom: 120px;
`;

const Header = styled.div`
width: 75vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 14px 8px 14px 8px;  
`;

const TeachersTitle = styled.span`
font-family: 'KumbhSans-SemiBold';
font-size: 16px;
font-weight: 500;
line-height: 20px;
color: #4F4F4F;
`;

const AddTeacherBtn = styled.button`
padding: 12px 14px;
font-family: 'KumbhSans-SemiBold';
font-size: 14px;
font-weight: 600;
line-height: 17px;
background-color: #509CDB;
border: none;
color: white;
border-radius: 4px;
`;

interface BodyProps {
    isVisAddTeacherModal: boolean;
}

const BlackScreen = styled.div<BodyProps>`
position: fixed;
background-color: #00000050;
width: 100vw;
height: 100vh;
`;

interface props {
    teacherArr: any[]
}

const Teachers = ({teacherArr}: props) => {
    const [isVisAddTeacherModal, setIsVisAddTeacherModal] = useState(false);

    const onClickAddTeacherBtn = () => {
        setIsVisAddTeacherModal(!isVisAddTeacherModal)
    }

    const addTeacher = () => {

        setIsVisAddTeacherModal(false);
    }


    return (
        <>
        {isVisAddTeacherModal && (
        <BlackScreen
        isVisAddTeacherModal/>
        )}
        <Container>
            <Header>
                <TeachersTitle>
                    Teachers
                </TeachersTitle>
                <AddTeacherBtn onClick={() => onClickAddTeacherBtn()}>Add Teacher</AddTeacherBtn>
            </Header>

            <TeacherList
            teacherArr={teacherArr}/>
            {isVisAddTeacherModal && (
                <AddTeacherModal
                closeModal={() => setIsVisAddTeacherModal(false)}
                addTeacher={addTeacher}/>
            )}
        </Container>
        </>
    )
}

export default Teachers

