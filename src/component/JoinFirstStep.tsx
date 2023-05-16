import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import JoinSecondStep from "./JoinSecondStep";
import { useNavigate } from "react-router-dom";
import { setSchools } from "../redux/school/state";

import SelectArrowPNG from '../assets/icons/select_arrow.png'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 100vh;
`;

const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100px;
text-align: center;
  font-weight: 600;
  font-size: 36px;
  font-family: "KumbhSans-SemiBold";
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
    margin-top: 30px;
    width: 31rem;
    height: 23rem;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const EnterName = styled.input`
  height: 42px;
  padding: 0px 13px;
  font-size: 14px;
  font-weight: 500;
  font-family: "KumbhSans-SemiBold";
  box-sizing: border-box;
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;
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

const SelectSchool = styled.select`
width: 248px;
  height: 42px;
  padding: 10px;
  box-sizing: border-box;
  border: 0.5px solid #a7a7a7;
  border-radius: 5px;
  color: #6c6c6c;

  font-size: 14px;
    font-weight: 500;
    color: #8A8A8A;
    font-family: "KumbhSans-SemiBold";

    -webkit-appearance:none; /* 크롬 화살표 없애기 */
    -moz-appearance:none; /* 파이어폭스 화살표 없애기 */
    appearance:none; /* 화살표 없애기 */

`;

const Option = styled.option``;

const Explanation = styled.p`
  text-align: center;
  color: #6c6c6c;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
`;

interface ButtonProps {
  readonly isVaild: boolean;
}

const Button = styled.button<ButtonProps>`
margin-top: 20px;
  height: 42px;
  padding: 10px;
  box-sizing: border-box;
  border: none;
    background-color: ${(props: any) => props.isVaild ? '#2D88D4' : '#BCBCBC'};
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = styled.div`
margin-top: 14px;
  width: 253px;
  text-align: center;
`;

const Span = styled.span`
  color: #6c6c6c;
  font-size: 13px;
`;

const LoginButton = styled.button`
  border: none;
  background: none;
  color: #2d88d4;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
`;

const SelectArrowIcon = styled.img`
position: absolute;
right: 9px;
width: 11px;
height: 6px;
`;

const SchoolSelectDiv = styled.div`
width: 248px;
margin-top: 14px;
position: relative;
display: flex;
align-items: center;
`;


interface props {
  setCurrentStep: (value: number) => void;
  id: string;
  onChangeId: any;
  schoolId: any
  setSchool: (id: any) => void,
}

const JoinFirstStep = ({ setCurrentStep, id, onChangeId, setSchool, schoolId }: props) => {
  const [isVaild, setIsVaild] = useState(false);
  const {schools} = useSelector((state: any) => state.school);

  useEffect(() => {
    if(id.length > 0 && schoolId !== 'default') {
      setIsVaild(true);
    } else {
      setIsVaild(false);
    }

  }, [id, schoolId])

  const selectSchool = (e: any) => {
    const index = schools.findIndex((item: any) => Number(item.school_id) === Number(e.target.value));
    setSchool(schools[index]);
  }

  const navigate = useNavigate();

  return (
    <Container>
      <Header>학교 관리자 계정을 생성하세요.</Header>
      <Main>
        <Form onSubmit={() => setCurrentStep(2)}>
          <EnterName
            placeholder="아이디를 입력하세요."
            value={id}
            onChange={(e: any) => onChangeId(e)}
          ></EnterName>
          <SchoolSelectDiv>
          <SelectArrowIcon
                src={SelectArrowPNG}
                />
          <SelectSchool 
          name="select" defaultValue={schoolId} onChange={selectSchool}>
            <option 
            key="0" value={"default"} disabled hidden>학교를 선택하세요.
            </option>
            {schools.map((item: any) => (
              <option key={item.school_id} value={item.school_id}>{item.school_name}</option>
            ))}
          </SelectSchool>
          </SchoolSelectDiv>
          <Button
          isVaild={isVaild}
          disabled={!isVaild}
          type="submit">다음</Button>
        </Form>
        <Login>
          <Span>이미 계정이 있으신가요?</Span>
          <LoginButton
          onClick={() => navigate("/")}>로그인</LoginButton>
        </Login>
      </Main>
    </Container>
  );
};

export default JoinFirstStep;
