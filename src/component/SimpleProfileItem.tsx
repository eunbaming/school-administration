import React from 'react';
import styled from 'styled-components';

import blank_profile from '../assets/blank_profile.jpg';

const Container = styled.div`
width: 100%;
height: 3.5rem;
padding: 0px 0px 0px 1.5rem;
display: flex;
flex-direction: row;
align-items: center;

:nth-child(odd) {
    background-color: #F3FAFF;
}
`;

const ProfileImageDiv = styled.div`
display: flex;
justify-content: center;
justify-content: center;
`;

const ProfileImage = styled.img`
 width: 2.2rem;
 height: 2.2rem;
 border-radius: 200px;   
`;

const NameText = styled.span`
margin-left: 20px;
font-size: 14px;
font-weight: 500;
font-family: 'KumbhSans-Regular';
`;

interface props {
    teacher: any
}


const SimpleProfileItem = ({teacher}: props) => {
    return (
        <Container>
            <ProfileImageDiv>
            <ProfileImage
            src={blank_profile}/>
            </ProfileImageDiv>
            <NameText>
                {teacher.name}
            </NameText>
        </Container>
    )
}

export default SimpleProfileItem;