import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const Container = styled.div`
padding-left: 15.5rem;
`;


interface props {
    children: any;
    currentTab: string;
    changeCurrentTab: (tab: string) => void;
}


const Layout = ({children, currentTab, changeCurrentTab}: props) => {
    return (
        <Container>
            <Menu
            currentTab={currentTab}
            changeCurrentTab={changeCurrentTab}/>
            {children}
        </Container>
    )
}

export default Layout