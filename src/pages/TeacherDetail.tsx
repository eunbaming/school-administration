import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
background-color: white;
padding-top: 146px;
padding-bottom: 60px;
`;

const ProfileImg = styled.img`
border-radius: 100;
width: 280px;
height: 280px;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;  
`;

const NameText = styled.div`
margin-top: 50px;
font-family: "KumbhSans-SemiBold";
font-size: 16px;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
`;

const InfoText = styled.div`
margin-top: 6px;
font-family: "KumbhSans-SemiBold";
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #A7A7A7;
`
const RightDiv = styled.div`
margin-left: 100px;
width: 350px;
display: flex;
flex-direction: column;
`;

const LabelText = styled.div`
 font-family: 'KumbhSans-SemiBold';
font-size: 16px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
`;

const ValueText = styled.div`
font-family: 'KumbhSans-Regular';
font-size: 16px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: #a7a7a7;
    
`;

interface props {
    teacher: any;
}

const TeacherDetail = ({teacher}: props) => {
    return (
        <Container>
            <LeftDiv>
                <ProfileImg
                src={teacher.profileImage}/>
                <NameText>{teacher.name}</NameText>
                <InfoText
                style={{marginTop: 15}}>{teacher.subject}</InfoText>
                <InfoText>{teacher.email}</InfoText>
            </LeftDiv>
            <RightDiv>
                <LabelText>
                    About
                </LabelText>
                <ValueText
                style={{marginTop: 16}}>
                    {teacher.about}
                </ValueText>
                <div
                style={{marginTop: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 100}}>
                    <span
                    style={{display: 'flex', flexDirection: 'column'}}>
                        <LabelText>
                            Age
                        </LabelText>
                        <ValueText
                        style={{marginTop: 12}}>
                            {teacher.age}
                        </ValueText>

                    </span>
                    <span
                    style={{display: 'flex', flexDirection: 'column'}}>
                        <LabelText>
                            Gender
                        </LabelText>
                        <ValueText
                        style={{marginTop: 12}}>
                            {teacher.gender}
                        </ValueText>
                    </span>
                </div>
            </RightDiv>

        </Container>
    ) 
}

export default TeacherDetail;