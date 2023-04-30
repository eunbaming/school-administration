import { NONAME } from 'dns';
import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

import SelectArrowPNG from '../assets/icons/select_arrow.png'

const Container = styled.div`
    margin-top: 60px;
    padding-top: 35px;
    width: 512px;
    height: 350px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const WelcomeText = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #667085;
    text-align: center;
    line-height: 25px;
`;

const Form = styled.form`
    width: 248px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
height: 42px;
    margin-top: 14px;
    padding: 0px 13px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'KumbhSans';
    border-radius: 4px;
    border: 0.5px solid #A7A7A7;
    ::placeholder,
  ::-webkit-input-placeholder {
    color: #8A8A8A
;
  }
  :-ms-input-placeholder {
     color: #8A8A8A
;
  }
`;

interface LoginButtonProps {
    readonly isVaildLoginForm: boolean;
}

const LoginButton = styled.button<LoginButtonProps>`
    margin-top: 14px;
    background-color: ${(props: any) => props.isVaildLoginForm ? '#2D88D4' : '#BCBCBC'};
    border-radius: 4px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: 0.5px solid #A7A7A7;
    font-weight: 700;
    font-family: "KumbhSans";
    font-size: 14px;
    color: white;
`;

const SignUpText = styled.span`
margin-top: 14px;
font-weight: 400;
font-size: 12px; 
color: #667085;
line-height: 15px;
user-select: none;
`;

const SelectTypeDiv = styled.div`
width: 248px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
padding-top: 13px;
padding-bottom: 13px;
`;

interface SelectTypeButtonProps {
    readonly selected: boolean;
}

const SelectTypeButton = styled.div`
margin-right: 10px;
width: 15px;
height: 15px;
border-radius: 100px;
border: 1.5px solid #A7A7A7;
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
`;

const Selected = styled.div`
width: 13px;
height: 13px;
border-radius: 100px;
background-color: #008BFF;
`

const SelectTypeItem = styled.div`
font-weight: 500;
font-size: 13px;
color: #667085;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background: white;
user-select: none;
`;

const SchoolSelectDiv = styled.div`
width: 248px;
margin-top: 14px;
position: relative;
display: flex;
align-items: center;
`;

const SchoolSelect = styled.select`
width: 248px;
    height: 42px;
    padding: 0px 13px;
    border-radius: 4px;
    border: 0.5px solid #A7A7A7;
    font-size: 14px;
    font-weight: 500;
    color: #8A8A8A;
    font-family: 'KumbhSans';

    -webkit-appearance:none; /* 크롬 화살표 없애기 */
    -moz-appearance:none; /* 파이어폭스 화살표 없애기 */
    appearance:none; /* 화살표 없애기 */

`;

const SelectArrowIcon = styled.img`
position: absolute;
right: 9px;
width: 11px;
height: 6px;
`;

interface props {
    type: string;
    selectType: (type: string) => void;
    navigateSignUp: () => void;
    submitLoginForm: any;
}

const LoginForm = ({submitLoginForm, navigateSignUp, type, selectType}: props) => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [school, setSchool] = useState('default');
    const [isVaildLoginForm, setIsVaildLoginForm] = useState(false);

    

    useEffect(() => {
        if(type === 'user') {
            if(school !== 'default' && id.length > 0 && password.length > 0) {
                setIsVaildLoginForm(true)
            } else {
                setIsVaildLoginForm(false);
            }
        } else {
            if(id.length > 0 && password.length > 0) {
                setIsVaildLoginForm(true);
            } else {
                setIsVaildLoginForm(false)
            }
        }

    }, [id, password, school, type])

    useEffect(() => {
        setId("");
        setPassword("");
    }, [type])

    const style = {
        control: (base: any) => ({
            ...base,
            border: 0,
            boxShadow: "none"
        })}


    const onChangeId = (e: any) => {
        setId(e.target.value)
    };

    const onChangePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const selectScool = (e: any) => {
        setSchool(e.target.value)
    }

    return (
        <Container>
            <SelectTypeDiv>
                <SelectTypeItem onClick={() => selectType("user")}><SelectTypeButton>
                    {type === 'user' && <Selected/>
                    }
                    </SelectTypeButton>Teacher / Student</SelectTypeItem>
                <SelectTypeItem onClick={() => selectType("admin")}><SelectTypeButton>
                    {type === 'admin' && <Selected/>}
                    </SelectTypeButton>Admin</SelectTypeItem>
            </SelectTypeDiv>
            <Form onSubmit={() => submitLoginForm(id, password)}>
            {type === 'user' && (
                <SchoolSelectDiv>
                <SelectArrowIcon
                src={SelectArrowPNG}
                />
                <SchoolSelect
                defaultValue={school} onChange={selectScool}>
                    <option 
                    key="0" value={"default"} disabled hidden>Select the name of school</option>
                    <option key="1" value={"school 1"}>school 1</option>
                    <option key="2" value={"school 2"}>school 2</option>
                    <option key="3" value={"school 3"}>school 3</option>
                </SchoolSelect>
                </SchoolSelectDiv>

            )}
            <Input type="text" placeholder='Enter the id' value={id} onChange={(e) => onChangeId(e)}/>
            <Input 
            type="password" placeholder='Enter Password' value={password} onChange={(e) => onChangePassword(e)}/>
            <LoginButton 
            isVaildLoginForm={isVaildLoginForm}
            disabled={!isVaildLoginForm}
            type={"submit"}>Login</LoginButton>
            </Form>
            {type === 'admin' && (
            <SignUpText>If you don’ t have an account? 
            <span
            onClick={() => navigateSignUp()}
            style={{color: '#2D88D4', fontWeight: 700}}> Sign up</span></SignUpText>
            )}
        </Container>

    )
}

export default LoginForm;