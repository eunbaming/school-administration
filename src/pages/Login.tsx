import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../component/LoginForm';

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;   
background-color: #FCFAFA;
flex-direction: column;
`

const Title = styled.div`
font-size: 36px;
font-weight: 600;
font-family: 'KumbhSans';
`;

const Login = () => {
    const [type, setType] = useState('user');

    const navigate = useNavigate();

    const selectType = (selectedType: string) => {
        if(selectedType !== type) {
            setType(selectedType);
        }
    }    

    const submitLoginForm = (id: string, password: string, school?: string) => {
        if(type === 'user' && id.length > 0 && password.length > 0 && school !== 'default') {
            navigate('dashboard');
        } else if(type === 'admin' && id.length > 0 && password.length > 0) {
            navigate('dashboard');   
        }
    }

    const navigateSignUp = () => {
        navigate('join');
    }

    return (
        <Container>
            <Title>Welcome, Log into you account</Title>
            <LoginForm
            type={type}
            selectType={selectType}
            navigateSignUp={navigateSignUp}
            submitLoginForm={submitLoginForm}/>
        </Container>
    )
}

export default Login;