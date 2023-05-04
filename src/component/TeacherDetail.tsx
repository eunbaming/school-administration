import React from 'react'
import styled from 'styled-components';

import CallIconPGN from '../assets/icons/call_icon.png';
import SMSIconPNG from '../assets/icons/sms_icon.png'; 

const Container = styled.div`
margin-top: 26.5vh;
padding-bottom: 100px;
position: fixed;
top: 0;
bottom: 0;
right: 15px;
width: 20vw;
overflow-y: scroll;

    display: flex;
    flex-direction: column;
    background-color: white;
`;

const ProfileDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 200;
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

interface props {
    teacher: any
}

const TeacherDetail = ({teacher}: props) => {

    return (
        <Container>
            <ProfileDiv>
            <ProfileImage
            src={teacher.profileImage}
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
                {teacher.subject}
            </InfoValueText>
            </InfoItemDiv>

            <InfoItemDiv
            style={{marginLeft: 40}}>
            <InfoLabelText>
                Class
            </InfoLabelText>
            <InfoValueText>
                {teacher.class}
            </InfoValueText>
            </InfoItemDiv>

            <InfoItemDiv
            style={{marginLeft: 25}}>
            <InfoLabelText>
                Gender
            </InfoLabelText>
            <InfoValueText>
                {teacher.gender}
            </InfoValueText>
            </InfoItemDiv>
            </BasicInfoDiv>

            <BasicInfoDiv>
            <InfoItemDiv>
            <InfoLabelText>
                Identification Number
            </InfoLabelText>
            <InfoValueText>
                {1111}
            </InfoValueText>
            </InfoItemDiv>
            <InfoItemDiv>
            <InfoLabelText>
                Password
            </InfoLabelText>
            <InfoValueText>
                {1111}
            </InfoValueText>
            </InfoItemDiv>

            </BasicInfoDiv>
            <AboutDiv>
                <InfoLabelText>About</InfoLabelText>
                <InfoValueText
                style={{whiteSpace: 'pre-wrap'}}>{teacher.about}asdjalksdjsakldjalksdjklasdjlk klasdjkladjlakdjsdlkjdlkadjlaksdj asdjakldjdakljlk djaksdjaslkdj askldjadlkjadlk jlkadjklasdjaklsdj ksdskdjk sjdks jksdjksdj ksjd ksjd ksjdksjd ksjdk djksdjksjd ksj ksdjksjd ksdj ksjdks jdksj kdjskdj ksdj skdj ksj skdskjd skjd ksjdk sjdkjs kdjs kjdks jdksj dksjdksjdk sjdk jskdj skd s sdkajdaljd kjdksjdjaksdjaslkdj askldjadlkjadlk jlkadjklasdjaklsdj ksdskdjk sjdks jksdjksdj ksjd ksjd ksjdksjd ksjdk djksdjksjd ksj ksdjksjd ksdj ksjdks jdksj kdjskdj ksdj skdj ksj skdskjd skjd ksjdk sjdkjs kdjs kjdks jdksj dksjdksjdk sjdk jskdj skd s sdkajdaljd kjdksjasdjalksdjsakldjalksdjklasdjlk klasdjkladjlakdjsdlkjdlkadjlaksdj asdjakldjdakljlk djaksdjaslkdj askldjadlkjadlk jlkadjklasdjaklsdj ksdskdjk sjdks jksdjksdj ksjd ksjd ksjdksjd ksjdk djksdjksjd ksj ksdjksjd ksdj ksjdks jdksj kdjskdj ksdj skdj ksj skdskjd skjd ksjdk sjdkjs kdjs kjdks jdksj dksjdksjdk sjdk jskdj skd s sdkajdaljd kjdksjdjaksdjaslkdj askldjadlkjadlk jlkadjklasdjaklsdj ksdskdjk sjdks jksdjksdj ksjd ksjd ksjdksjd ksjdk djksdjksjd ksj ksdjksjd ksdj ksjdks jdksj kdjskdj ksdj skdj ksj skdskjd skjd ksjdk sjdkjs kdjs kjdks jdksj dksjdksjdk sjdk jskdj skd s sdkajdaljd kjdksjasdjalksdjsakldjalksdjklasdjlk klasdjkladjlakdjsdlkjdlkadjlaksdj asdjakldjdakljlk djaksdjaslkdj askldjadlkjadlk jlkadjklasdjaklsdj ksdskdjk sjdks jksdjksdj ksjd ksjd ksjdksjd ksjdk djksdjksjd ksj ksdjksjd ksdj ksjdks jdksj kdjskdj ksdj skdj ksj skdskjd skjd ksjdk sjdkjs kdjs kjdks jdksj dksjdksjdk sjdk jskdj skd s sdkajdaljd kjdksjdjaksdjaslkdj askldjadlkjadlk jlkadjklasdjaklsdj ksdskdjk sjdks jksdjksdj ksjd ksjd ksjdksjd ksjdk djksdjksjd ksj ksdjksjd ksdj ksjdks jdksj kdjskdj ksdj skdj ksj skdskjd skjd ksjdk sjdkjs kdjs kjdks jdksj dksjdksjdk sjdk jskdj skd s sdkajdaljd kjdksj</InfoValueText>
            </AboutDiv>
            <ConnectItemDiv
            style={{marginTop: 30}}>
                <ConnectIcon
                src={CallIconPGN}/>
                <ConnectValue>
                    {teacher.phoneNumber}
                </ConnectValue>
            </ConnectItemDiv>
        </Container>
    )
}

export default TeacherDetail;
