import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: fixed;
width: 241px;
height: 100vh;
background-color: #152259;
`;

const Header = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const LogoImage = styled.img`
    width: 65px;
    height: 65px;
    border-radius: 200;
`

const Title = styled.div`
    font-size: 14px;
`;

const Menu = () => {
    
    return (
        <Container>
            <Header>
                <LogoImage
                src="./logo.png"/>
                <Title>
                Udemy Inter.school
                </Title>
            </Header>
        </Container>
    )
}

export default Menu;