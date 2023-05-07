import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
margin-top: 50px;
    display: flex;
    cursor: pointer;
`

const IconDiv = styled.div`
width: 36px;
height: 36px;
background-color: #EFF3FA;  
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
`;

const Icon = styled.img`
width: 24px;
height: 24px;
`;

const AddUserDiv = styled.div`
width: 30rem;
margin-left: 20px;
display: flex;
flex-direction: column;    
`;

const AddUserText = styled.div`
font-family: 'KumbhSans-SemiBold';
font-size: 24px;
font-weight: 500;
line-height: 30px;  
`;

const DescripText = styled.div`
margin-top: 16px;
font-family: 'KumbhSans-Light';
font-size: 14px;
font-weight: 400;
line-height: 19px;
    
`;

interface props {
    iconPNG: any,
    type: string,
    onClickAddUser: (type: string) => void,
}

const AddUserButton = ({iconPNG, type, onClickAddUser}: props) => {
    return (
        <Container
        onClick={() => onClickAddUser(type)}>
            <IconDiv>
                <Icon
                style={{fill: 'red'}}
                src={iconPNG}/>
            </IconDiv>
            <AddUserDiv>
                <AddUserText>
                    Add {type}
                </AddUserText>
                <DescripText>Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!</DescripText>
            </AddUserDiv>
        </Container>
    )
}

export default AddUserButton; 