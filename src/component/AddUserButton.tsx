import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
    display: flex;
`

const IconDiv = styled.div`
width: 36px;
height: 36px;
background-color: #EFF3FA;  
`;

interface props {
    iconPNG: any,
    type: string,
}

const AddUserButton = () => {
    return (
        <Container></Container>
    )
}

export default AddUserButton; 