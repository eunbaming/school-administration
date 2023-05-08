import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import TopBar from './TopBar';

const Container = styled.div`
padding-left: 15.5rem;
`;


interface props {
    children: any;
}


const Layout = ({children}: props) => {
    return (
        <Container>
            <TopBar/>
            <Menu/>
            {children}
        </Container>
    )
}

export default Layout