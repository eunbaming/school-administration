import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { setAddModal, setEditModal, addTeachers, editTeacher, setFilteredTeachers } from '../redux/teachers/state';

import Layout from "../component/Layout";
import TeacherList from '../component/TeacherList';
import AddTeacherModal from '../component/AddTeacherModal';
import EditTeacherModal from '../component/EditTeacherModal';
import TeacherDetail from '../component/TeacherDetail';
import ListHeader from '../component/ListHeader';

import { POST_addTeacher } from '../server/teacher';

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

const Teachers = () => {
  const [curTeacherIndex, setCurTeacherIndex] = useState(0);

  const { teachers, isVisAddModal, isVisEditModal, filteredTeachers } = useSelector((state: any) => state.teacher);

  const dispatch = useDispatch();


  useEffect(() => {

    console.log("isVisEditModal", isVisEditModal)
  }, [isVisEditModal])

    const onClickAddTeacherButton = () => {
        dispatch(setAddModal(true));
    }



    const submitAddTeacher = (teacherObj: any) => {

        console.log("submitAddTeacher teacherObj", teacherObj)
        
    
        POST_addTeacher(teacherObj)
        .then((response) => {
            console.log("addTeacher_POST response", response);
            dispatch(addTeachers([teacherObj]))
        })
        .catch((error) => {
            console.log("addTeacher_POST error", error);
        })

    }

    const submitEditTeacher = (name: string, teacherClass: string | undefined, gender: string | undefined, subject:string | undefined, phoneNumber: string | undefined, email: string | undefined, identificationNumber: string | undefined, password: string | undefined, about: string | undefined, profileImageUrl: string | undefined) => {

        const teacher = {
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

        dispatch(editTeacher(teacher, curTeacherIndex));

    }


    return (
        <Layout>
        {(isVisAddModal || isVisEditModal) && (
        <BlackScreen
        isVisAddTeacherModal/>
        )}
        <Container>
            <ListHeader
            onClickAddTeacherButton={onClickAddTeacherButton}/>
            <TeacherListContainer>
                <TeacherList
                curTeacherIndex={curTeacherIndex}
                setCurTeacherIndex={setCurTeacherIndex}
                teacherArr={filteredTeachers}/>
            </TeacherListContainer>
            
        </Container>
        {isVisAddModal && (
                <AddTeacherModal
                closeModal={() => dispatch(setAddModal(false))}
                submitAddTeacher={submitAddTeacher}/>
        )}
        {isVisEditModal && (
            <EditTeacherModal
            teacher={teachers[curTeacherIndex]}
            submitEditTeacher={submitEditTeacher}
            closeModal={() => dispatch(setEditModal(false))}
            />

        )}
        </Layout>
    )
}

export default Teachers
