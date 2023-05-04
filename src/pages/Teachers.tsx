import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { addTeachers } from '../redux/teachers/state';

import TeacherList from '../component/TeacherList';
import AddTeacherModal from '../component/AddTeacherModal';
import TeacherDetail from '../component/TeacherDetail';
import ListHeader from '../component/ListHeader';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
padding-bottom: 120px;
`;

const Header = styled.div`
position: fixed;
top: 0;
background-color: black;
width: 75vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 74px 8px 14px 8px;  
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

const TeacherListContainer = styled.div`
display: flex;
flex-direction: row;
`;

interface BodyProps {
    isVisAddTeacherModal: boolean;
}

const BlackScreen = styled.div<BodyProps>`
z-index: 15;
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

    const dispatch = useDispatch();

    const onClickAddTeacherButton = () => {
        setIsVisAddTeacherModal(!isVisAddTeacherModal)
    }

    const addTeacher = (name: string, teacherClass: string | undefined, gender: string | undefined, subject:string | undefined, phoneNumber: string | undefined, email: string | undefined, identificationNumber: string | undefined, password: string | undefined, about: string | undefined, profileImageUrl: string | undefined) => {
        
        setIsVisAddTeacherModal(false);
        const teacherObj = {
            name,
            subject,
            class: teacherClass,
            email,
            gender,
            about,
            identificationNumber,
            password,
            phoneNumber,
            profileImage: profileImageUrl
        }

        dispatch(addTeachers([teacherObj]))
    }


    return (
        <>
        {isVisAddTeacherModal && (
        <BlackScreen
        isVisAddTeacherModal/>
        )}
        <Container>
            <ListHeader
            onClickAddTeacherButton={onClickAddTeacherButton}/>
            <TeacherListContainer>
                <TeacherList
                teacherArr={teacherArr}/>
            </TeacherListContainer>
            
        </Container>
        {isVisAddTeacherModal && (
                <AddTeacherModal
                closeModal={() => setIsVisAddTeacherModal(false)}
                addTeacher={addTeacher}/>
            )}
        </>
    )
}

export default Teachers

