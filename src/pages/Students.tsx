import React, { useState } from "react";
import styled from "styled-components";

import Layout from "../component/Layout";
import ModalArea from "../component/ModalArea";
import { useDispatch, useSelector } from "react-redux";
import { addStudents, editStudent } from "../redux/students/state";
import ListStudentHeader from "../component/ListStudentHeader";
import StudentListComponent from "../component/StudentListComponent";
import EditStudentModal from "../component/EditStudentModal";
import { POST_addStudent } from "../server/student";

const FullContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding-bottom: 120px;
`;

const StudentListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BlackScreen = styled.div`
  z-index: 31;
  position: fixed;
  background-color: #00000050;
  width: 100vw;
  height: 100vh;
`;

const Students = () => {
  const [modal, setModal] = useState(false);
  const [curStudentIndex, setCurStudentIndex] = useState(0);

  const dispatch = useDispatch();
  const { students, isVisEditModal, filteredStudent } = useSelector(
    (state: any) => state.student
  );

  const onClickAddStudentButton = () => {
    setModal(true);
  };

  const submitAddStudent = (studentObj: any) => {
    console.log("studentobj", studentObj);

    POST_addStudent(studentObj)
      .then((response) => {
        console.log("POST_addStudent response", response);
        dispatch(addStudents(studentObj));
        setCurStudentIndex(students.length);
      })
      .catch((error) => {
        console.log("POST_addStudent error", error);
      });
  };

  const submitEditStudent = (
    name: string,
    studentClass: string | undefined,
    gender: string | undefined,
    phone: string | undefined,
    email: string | undefined,
    idNum: string | undefined,
    password: string | undefined,
    // about: string | undefined,
    profileImageUrl: string | undefined
  ) => {
    const student = {
      name,
      class: studentClass,
      email,
      gender,
      idNum,
      password,
      phone,
      profileImage: profileImageUrl,
    };

    dispatch(editStudent(student, curStudentIndex));
  };

  return (
    <Layout>
      {(modal || isVisEditModal) && <BlackScreen />}
      {modal && (
        <ModalArea submitAddStudent={submitAddStudent} setModal={setModal} />
      )}
      {isVisEditModal && (
        <EditStudentModal
          student={students[curStudentIndex]}
          submitEditStudent={submitEditStudent}
        />
      )}
      <Container>
        <ListStudentHeader onClickAddStudentButton={onClickAddStudentButton} />
        <StudentListContainer>
          <StudentListComponent
            curStudentIndex={curStudentIndex}
            setCurStudentIndex={setCurStudentIndex}
            studentArr={filteredStudent}
          />
        </StudentListContainer>
      </Container>
    </Layout>
  );
};

export default Students;
