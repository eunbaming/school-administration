import React from "react";
import styled from "styled-components";

import CallIconPGN from "../assets/icons/call_icon.png";
import SMSIconPNG from "../assets/icons/sms_icon.png";
import { useDispatch } from "react-redux";
import { deleteStudent, setEditModal } from "../redux/students/state";
import { rootUrl } from "../server";
import { DELETE_student } from "../server/student";

interface props {
  student: any;
  index: number;
}

const Container = styled.div`
  margin-top: 26.5vh;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0px;
  width: 20vw;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: white;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProfileDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 14vw;
  height: 14vw;
  border-radius: 200;
`;

const NameDiv = styled.div`
  margin-top: 16px;
  font-family: "KumbhSans-SemiBold";
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

const BasicInfoDiv = styled.div`
  margin-top: 45px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 6.8vw;
`;

const InfoLabelText = styled.span`
  font-family: "KumbhSans-SemiBold";
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`;

const InfoValueText = styled.span`
  margin-top: 4px;
  font-family: "KumbhSans-Regular";
  font-size: 12px;
  font-weight: 500;
  color: #a7a7a7;
  white-space: nowrap;
`;

const AboutDiv = styled.div`
  margin-top: 38px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

const ConnectItemDiv = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ConnectIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const ConnectValue = styled.span`
  margin-left: 8px;
  color: #a7a7a7;
  font-family: "KumbhSans-Regular";
  font-size: 12px;
  font-weight: 400;
`;

const Footer = styled.div`
  padding-right: 10px;
  margin-top: 100px;
  padding-bottom: 30px;
  text-align: right;
`;

const EditText = styled.span`
  font-family: "KumbhSans-Regular";
  font-size: 17px;
  color: #a7a7a7;
  margin-right: 15px;
  cursor: pointer;
`;

const RemoveText = styled.span`
  font-family: "KumbhSans-Regular";
  font-size: 17px;
  color: #ff4d4d;
  cursor: pointer;
`;

const StudentDetail = ({ student, index }: props) => {
  const dispatch = useDispatch();

  const onClickEdit = () => {
    dispatch(setEditModal(true));
  };

  const onClickDelete = () => {
    // if (confirm("해당 학생을 삭제하겠습니까?") === true) {
    DELETE_student(student.id)
      .then((response) => {
        console.log("DELETE_student reponse", response);
        dispatch(deleteStudent(index));
      })
      .catch((error) => {
        console.log("DELETE_student error", error);
      });
    // }
  };

  return (
    <Container>
      <ProfileDiv>
        <ProfileImage
          src={
            student.added
              ? student.image_url
              : `${rootUrl}/${student.profile_image_url}`
          }
        />
        <NameDiv>{student.name}</NameDiv>
      </ProfileDiv>
      <BasicInfoDiv>
        <InfoItemDiv>
          <InfoLabelText>Class</InfoLabelText>
          <InfoValueText>{student.class}</InfoValueText>
        </InfoItemDiv>
        <InfoItemDiv>
          <InfoLabelText>Gender</InfoLabelText>
          <InfoValueText>{student.gender}</InfoValueText>
        </InfoItemDiv>
      </BasicInfoDiv>
      {/* 
      <BasicInfoDiv>
        <InfoItemDiv>
          <InfoLabelText>Identification Number</InfoLabelText>
          <InfoValueText>{student.id}</InfoValueText>
        </InfoItemDiv>
        <InfoItemDiv>
          <InfoLabelText>Password</InfoLabelText>
          <InfoValueText>{1111}</InfoValueText>
        </InfoItemDiv>
      </BasicInfoDiv> */}

      <AboutDiv>
        <InfoLabelText>About</InfoLabelText>
        <InfoValueText style={{ whiteSpace: "pre-wrap" }}>
          {student.about}
        </InfoValueText>
      </AboutDiv>

      <ConnectItemDiv style={{ marginTop: 30 }}>
        <ConnectIcon src={CallIconPGN} />
        <ConnectValue>{student.phoneNumber}</ConnectValue>
      </ConnectItemDiv>
      <ConnectItemDiv style={{ marginTop: 10 }}>
        <ConnectIcon src={SMSIconPNG} />
        <ConnectValue>{student.email}</ConnectValue>
      </ConnectItemDiv>

      <Footer>
        <EditText onClick={onClickEdit}>Edit</EditText>
        <RemoveText onClick={onClickDelete}>Delete</RemoveText>
      </Footer>
    </Container>
  );
};

export default StudentDetail;
