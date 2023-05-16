import React from "react";
import styled from "styled-components";

import BlankProfileImagePNG from "../assets/blank_profile.jpg";
import { rootUrl } from "../server";

interface StudentItemProps {
  index: number;
  curStudentIndex: number;
}

const Container = styled.div<StudentItemProps>`
  width: 60.7vw;
  display: flex;
  flex: 1;
  text-decoration: none;
  color: #4f4f4f;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0em;

  background-color: ${(props) =>
    props.index === props.curStudentIndex
      ? "#509CDB"
      : props.index % 2 === 0
      ? "#f3faff"
      : "#fff"};
  user-select: none;
`;

const NameDiv = styled.div`
  flex: 1;
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
  curStudentIndex: number;
  selectStudentListItem: (index: number) => void;
  student: any;
}

const StudentListItem = ({
  index,
  curStudentIndex,
  selectStudentListItem,
  student,
}: props) => {
  return (
    <Container
      index={index}
      curStudentIndex={curStudentIndex}
      onClick={() => selectStudentListItem(index)}
    >
      <NameDiv>
        <ProfileImg
          src={
            student.added
              ? student.image_url
              : `${rootUrl}/${student.profile_image_url}`
          }
        />
        {student.name}
      </NameDiv>
      <StudentIdDiv>{student.id}</StudentIdDiv>
      <ClassDiv>
        {student.class === 1 && "1 학년"}
        {student.class === 2 && "2 학년"}
        {student.class === 3 && "3 학년"}
      </ClassDiv>
      <GenderDiv>
        {student.gender === 1 && "남성"}
        {student.gender === 2 && "여성"}
      </GenderDiv>
      <EmailDiv>{student.email}</EmailDiv>
    </Container>
  );
};

export default StudentListItem;
