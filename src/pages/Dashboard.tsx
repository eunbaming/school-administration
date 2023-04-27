import React from 'react';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';

import Layout from '../component/Layout';
import Teachers from '../pages/Teachers';
import Students from '../pages/Students';

const Container = styled.div`

`;


const Dashboard = () => {
    return (
        <Layout>
        <Routes>
            <Route path="teachers" element={<Teachers/>}/>
            <Route path="students" element={<Students/>}/>
        </Routes>
        </Layout>
    )
}

export default Dashboard;