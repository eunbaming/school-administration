import React, { useState } from "react";
import styled from "styled-components";
import StudentListItem from "./StudentListItem";
import StudentDetail from "./StudentDetail";

interface props {
  studentArr: any[];
  curStudentIndex: number;
  setCurStudentIndex: (index: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

const StudentsDiv = styled.div`
  background-color: #fcfafa;
  display: flex;
`;

const NoStudent = styled.h1`
  flex: 1;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "KumbhSans-SemiBold";
  font-weight: 600;
  font-size: 28px;
  line-height: 34.73px;
  color: #4f4f4f;
`;

const Explanation = styled.div`
  font-family: "KumbhSans-SemiBold";
  font-weight: 500;
  font-size: 14px;
  color: #4f4f4f;
`;

const StudentListAndDetailDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StudentList = styled.div`
  margin-top: 27vh;
  top: 0;
  bottom: 0;
  width: 59.5vw;
  overflow-y: scroll;
  position: fixed;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StudentListComponent = ({
  studentArr,
  curStudentIndex,
  setCurStudentIndex,
}: props) => {
  const selectStudentListItem = (index: number) => {
    setCurStudentIndex(index);
  };

  return (
    <Container>
      <StudentsDiv>
        {studentArr.length === 0 && (
          <NoStudent>
            No students at this time
            <Explanation>
              Students will appear here after they enroll in your school.
            </Explanation>
          </NoStudent>
        )}
        {studentArr.length > 0 && (
          <StudentListAndDetailDiv>
            <StudentList>
              {studentArr.map((item, index) => {
                return (
                  <StudentListItem
                    index={index}
                    selectStudentListItem={selectStudentListItem}
                    curStudentIndex={curStudentIndex}
                    key={index}
                    student={item}
                  />
                );
              })}
            </StudentList>
            <StudentDetail student={studentArr[curStudentIndex]} />
          </StudentListAndDetailDiv>
        )}
      </StudentsDiv>
    </Container>
  );
};

export default StudentListComponent;
