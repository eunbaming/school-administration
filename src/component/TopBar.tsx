import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { logout } from '../server/auth';

const Container = styled.div`
z-index: 30;
position: fixed;
top: 0px;
width: 83vw;
 height: 3rem;
 display: flex;
 justify-content: flex-end;
`;

const LogoutText = styled.span`
padding-top: 20px;
padding-right: 33px;
font-family: 'KumbhSans-SemiBold';
font-size: 14px;
font-weight: 600;
cursor: pointer;
`;

const TopBar = () => {
    const navigate = useNavigate();

    const onClickLogout = () => {
        logout("")
        .then((response) => {
            console.log("logout success", response)
            navigate("/")
        })
        .catch((error) => {
            console.log("logout failed", error);
        })
    }

    return (
        <Container>
            <LogoutText onClick={() => onClickLogout()}>
                Log out
            </LogoutText>

        </Container>
    )
}

export default TopBar;