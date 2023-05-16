import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { setAddModal, setEditModal, addTeacher, editTeacher, setFilteredTeachers } from '../redux/teachers/state';

import Layout from "../component/Layout";
import TeacherList from '../component/TeacherList';
import AddTeacherModal from '../component/AddTeacherModal';
import EditTeacherModal from '../component/EditTeacherModal';
import TeacherDetail from '../component/TeacherDetail';
import ListHeader from '../component/ListHeader';

import { POST_addTeacher, PUT_editTeacher } from '../server/teacher';

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
            console.log("POST_addTeacher response", response);
            dispatch(addTeacher(teacherObj))
            setCurTeacherIndex(teachers.length)
            dispatch(setAddModal(false));
        })
        .catch((error) => {
            console.log("POST_addTeacher error", error);
            alert("선생님 등록 실패하였습니다.")

        })

    }

    const submitEditTeacher = (teacherObj: any) => {

        

        PUT_editTeacher(teacherObj)
        .then((response) => {
            console.log("PUT_editTeacher response", response);

            dispatch(setAddModal(false));
            dispatch(editTeacher(teacherObj));

        })
        .catch((error) => {
            console.log("PUT_editTeacher error", error);
            alert("선생님 수정 실패하였습니다.")

        })


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
