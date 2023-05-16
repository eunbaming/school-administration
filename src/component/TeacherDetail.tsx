/* eslint-disable no-restricted-globals */
import React from 'react'
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { rootUrl } from '../server';

import { setEditModal, deleteTeacher } from '../redux/teachers/state';
import { DELETE_Teacher } from '../server/teacher';

import CallIconPGN from '../assets/icons/call_icon.png';
import SMSIconPNG from '../assets/icons/sms_icon.png'; 
import BlankProfilePNG from '../assets/blank_profile.jpg';

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
margin-top: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
    width: 14vw;
    height: 14vw;
    border-radius: 200px;
`;

const NameDiv = styled.div`
margin-top: 16px;
font-family: 'KumbhSans-SemiBold';
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
font-family: 'KumbhSans-SemiBold';
font-size: 12px;
font-weight: 600;
white-space: nowrap;
`;

const InfoValueText = styled.span`
margin-top: 4px;
font-family: 'KumbhSans-Regular';
font-size: 12px;
font-weight: 500;
color: #A7A7A7;
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
color: #A7A7A7;
font-family: "KumbhSans-Regular";
font-size: 12px;
font-weight: 400;
`;

const Footer = styled.div`
padding-right: 25px;
margin-top: 30px;
padding-bottom: 30px;
text-align: right;
`;

const EditText = styled.span`
font-family: 'KumbhSans-Regular';
font-size: 17px;
color: #A7A7A7;
margin-right: 15px;
cursor: pointer;
`;

const RemoveText = styled.span`
font-family: 'KumbhSans-Regular';
font-size: 17px;
color: #FF4D4D;
cursor: pointer;
`;

interface props {
    index: number;
    teacher: any;
}

const TeacherDetail = ({teacher, index}: props) => {
    const dispatch = useDispatch();

    const onClickEdit = () => {
        dispatch(setEditModal(true))
    }

    const onClickDelete = () => {
        if(confirm("해당 선생님을 삭제하겠습니까?") === true) {
            DELETE_Teacher(teacher.id)
            .then((response) => {
                console.log("DELETE_Teacher response", response);
                dispatch(deleteTeacher(teacher.id))
            })
            .catch((error) => {
                console.log("DELETE_Teacher error", error);
            })
        } else {

        }
    }

    return (
        <Container>
            <ProfileDiv>
            <ProfileImage
            src={teacher.added ? teacher.image_url : `${rootUrl}/${teacher.profile_image_url}`}
            />
            <NameDiv>
                {teacher.name}
            </NameDiv>
            </ProfileDiv>
            <BasicInfoDiv>
            <InfoItemDiv>
            <InfoLabelText>
                Subject
            </InfoLabelText>
            <InfoValueText>
                {teacher.subject === 1 && '국어'}
                {teacher.subject === 2 && '영어'}
                {teacher.subject === 3 && '수학'}
                {teacher.subject === 4 && '사회'}
                {teacher.subject === 5 && '과학'}
            </InfoValueText>
            </InfoItemDiv>

            <InfoItemDiv
            style={{marginLeft: 40}}>
            <InfoLabelText>
                Class
            </InfoLabelText>
            <InfoValueText>
                {teacher.class === 1 && '1 학년'}
                {teacher.class === 2 && '2 학년'}
                {teacher.class === 3 && '3 학년'}
            </InfoValueText>
            </InfoItemDiv>

            <InfoItemDiv
            style={{marginLeft: 25}}>
            <InfoLabelText>
                Gender
            </InfoLabelText>
            <InfoValueText>
                {teacher.gender === 1 && '남성'}
                {teacher.gender === 2 && '여성'}
            </InfoValueText>
            </InfoItemDiv>
            </BasicInfoDiv>
            {/*
            <BasicInfoDiv>
            <InfoItemDiv>
            <InfoLabelText>
                Identification Number
            </InfoLabelText>
            <InfoValueText>
                {teacher.identificationNumber}
            </InfoValueText>
            </InfoItemDiv>
            <InfoItemDiv>
            <InfoLabelText>
                Password
            </InfoLabelText>
            <InfoValueText>
                {teacher.password}
            </InfoValueText>
            </InfoItemDiv>
            </BasicInfoDiv>
            */}

            <AboutDiv>
                <InfoLabelText>About</InfoLabelText>
                <InfoValueText
                style={{whiteSpace: 'pre-wrap'}}>{teacher.user_about}</InfoValueText>
            </AboutDiv>
            <ConnectItemDiv
            style={{marginTop: 30}}>
                <ConnectIcon
                src={CallIconPGN}/>
                <ConnectValue>
                    {teacher.phone_number}
                </ConnectValue>
            </ConnectItemDiv>
            <ConnectItemDiv
            style={{marginTop: 10}}>
                <ConnectIcon
                src={SMSIconPNG}/>
                <ConnectValue>
                    {teacher.email_address}
                </ConnectValue>
            </ConnectItemDiv>
            <Footer>
                <EditText onClick={() => onClickEdit()}>Edit</EditText>
                <RemoveText onClick={() => onClickDelete()}>Delete</RemoveText>
            </Footer>
        </Container>
    )
}

export default TeacherDetail;
