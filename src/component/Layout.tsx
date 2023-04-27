import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const Container = styled.div`
padding-left: 241px;
`;


interface props {
    children: any
}


const Layout = ({children}: props) => {
    return (
        <Container>
            <Menu/>
            {children}
        </Container>
    )
}

export default Layout