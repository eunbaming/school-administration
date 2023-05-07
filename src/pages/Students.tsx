import React, { useState } from "react";
import styled from "styled-components";

import ModalArea from "../component/ModalArea";
import StudentListItem from "../component/StudentListItem";
import { useDispatch } from "react-redux";
import { addStudents } from "../redux/students/state";
import ListStudentHeader from "../component/ListStudentHeader";
import StudentListComponent from "../component/StudentListComponent";

const FullContainer = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding-bottom: 120px;
`;

const StudentListContainer = styled.div`
  // width: 952px;
  // height: 419px;
  // background-color: #fcfafa;
  // margin: 20px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // margin-top: 10px;
  // background-color: #fcfafa;
  // display: flex;
  // width: 75vw;
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

interface props {
  studentArr: any[];
}

const Students = ({ studentArr }: props) => {
  const [modal, setModal] = useState(false);
  const [curStudentIndex, setCurStudentIndex] = useState(0);
  const dispatch = useDispatch();

  const onClickAddStudentButton = () => {
    setModal(true);
  };

  const addStudent = (
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
    setModal(false);

    const studentObj = {
      name,
      class: studentClass,
      gender,
      email,
      // about,
      id: idNum,
      password,
      phone,
      profileImage: profileImageUrl,
    };

    dispatch(addStudents([studentObj]));
  };

  return (
    <FullContainer>
      {modal && <BlackScreen />}
      {modal && <ModalArea addStudent={addStudent} setModal={setModal} />}
      <Container>
        <ListStudentHeader onClickAddStudentButton={onClickAddStudentButton} />
        <StudentListContainer>
          <StudentListComponent
            curStudentIndex={curStudentIndex}
            setCurStudentIndex={setCurStudentIndex}
            studentArr={studentArr}
          />
        </StudentListContainer>
      </Container>
    </FullContainer>
  );
};

export default Students;
