import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60vw;
  display: flex;
  flex: 1;
  text-decoration: none;
  color: #4f4f4f;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0em;

  background-color: #fff;
  user-select: none;
`;

const NameDiv = styled.div`
  flex: 1.5;
  padding: 12px 8px;
  font-family: "KumbhSans-Regular";
  display: flex;
  align-items: center;
`;

const StudentIdDiv = styled.div`
  flex: 1;
  padding: 16px 8px;
  font-family: "KumbhSans-Regular";
`;

const EmailDiv = styled.div`
  flex: 1.6;
  padding: 16px 8px;
  font-family: "KumbhSans-Regular";
`;

const ClassDiv = styled.div`
  flex: 1;
  padding: 16px 8px;
  font-family: "KumbhSans-Regular";
`;

const GenderDiv = styled.div`
  flex: 1;
  padding: 16px 8px;
  font-family: "KumbhSans-Regular";
`;

const ProfileImg = styled.img`
  margin-right: 11px;
  border-radius: 100px;
  width: 24px;
  height: 24px;
`;

interface props {
  index: number;
  selectStudentListItem: (index: number) => void;
  student: any;
}

const StudentListItem = ({ index, selectStudentListItem, student }: props) => {
  return (
    <Container onClick={() => selectStudentListItem(index)}>
      <NameDiv>
        <ProfileImg src={student.profileImage} />
        {student.name}
      </NameDiv>
      <StudentIdDiv>{student.id}</StudentIdDiv>
      <EmailDiv>{student.email}</EmailDiv>
      <ClassDiv>{student.class}</ClassDiv>
      <GenderDiv>{student.gender}</GenderDiv>
    </Container>
  );
};

export default StudentListItem;
