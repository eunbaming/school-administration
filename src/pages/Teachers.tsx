import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { addTeachers } from '../redux/teachers/state';

import TeacherList from '../component/TeacherList';
import AddTeacherModal from '../component/AddTeacherModal';
import TeacherDetail from '../component/TeacherDetail';
import ListHeader from '../component/ListHeader';

const FullContainer = styled.div`
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
padding-bottom: 120px;
`;


const TeacherListContainer = styled.div`
display: flex;
flex-direction: row;
`;

interface BodyProps {
    isVisAddTeacherModal: boolean;
}

const BlackScreen = styled.div<BodyProps>`
z-index: 31;
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
        <FullContainer>
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
        </FullContainer>
    )
}

export default Teachers

