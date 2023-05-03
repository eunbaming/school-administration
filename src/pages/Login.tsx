import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

import LoginForm from '../component/LoginForm';
import {rootUrl} from '../server';

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
font-family: "KumbhSans-SemiBold";
`;

const Login = () => {
    const [type, setType] = useState('user');
    const {schools} = useSelector((state: any) => state.school); 

    const navigate = useNavigate();

    const selectType = (selectedType: string) => {
        if(selectedType !== type) {
            setType(selectedType);
        }
    }    

    const submitLoginForm = (event: any, id: string, password: string, school?: string) => {
        
        event.preventDefault()
        if(type === 'user' && id.length > 0 && password.length > 0 && school !== 'default') {
            navigate('dashboard');
        } else if(type === 'admin' && id.length > 0 && password.length > 0) {

            console.log("submitLoginForm type admin");

            
            axios.post(`${rootUrl}/admin/login`, {
                admin_name: id,
                admin_pwd: password,
            })
            .then((response: any) => {
            navigate('dashboard');
            console.log("login success response", response);
            })
            .catch((error: any) => {
            console.log("login failure error", error);

            alert("ID or password do not match.")
            })
            
            
        }
    }

    const navigateSignUp = () => {
        navigate('join');
    }

    return (
        <Container>
            <Title>Welcome, Log into you account</Title>
            <LoginForm
            schools={schools}
            type={type}
            selectType={selectType}
            navigateSignUp={navigateSignUp}
            submitLoginForm={submitLoginForm}/>
        </Container>
    )
}

export default Login;