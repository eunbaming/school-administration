import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentTab } from '../redux/tab/state';

import SchoolLogoPNG from '../assets/logo.png';
import DashboardIconPNG from '../assets/icons/dashboard_icon.png';
import StudentIconPNG from '../assets/icons/student_icon.png';
import RightArrowIconPNG from '../assets/icons/right_arrow.png';
import BankIconPNG from '../assets/icons/bank_icon.png';

const Container = styled.div`
position: fixed;
left: 0;
width: 15.5rem;
height: 100vh;
background-color: #152259;
`;

const Header = styled.div`
padding-top: 26px;
padding-bottom: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 0.5px solid #BDBDBD;
`;

const LogoImage = styled.img`
    width: 65px;
    height: 65px;
    border-radius: 200;
`

const Title = styled.div`
    margin-top: 22px;
    font-family: "KumbhSans-SemiBold";
    font-weight: 600;
    font-size: 16px;
    color: white;
`;

const CategoryList = styled.div`
display: flex;
flex-direction: column;
padding: 16px 28px;
`;

const CategoryItem = styled(Link)`
padding: 11px 15px 12px 17px;
display: flex;
flex-direction: row;
background: #152259;
align-items: center;
justify-content: space-between;
border-radius: 4px;
user-select: none;
text-decoration: none;
`;

const CategoryIcon = styled.img`
margin-bottom: -2px;
width: 13.33px;
height: 13.33px;
`;

const TeacherIcon = styled.img`
margin-bottom: -2px;
width: 15px;
height: 15px;  
`;

const StudentIcon = styled.img`
margin-bottom: -2px;
width: 15px;
height: 15px;
`;

const CategoryText = styled.span`
font-family: "KumbhSans-SemiBold";
font-weight: 600;
font-size:14px;
margin-left: 17.33px;
color: white;
`;

const RightArrowIcon = styled.img`
 width: 5px;
 height: 10px;   
`;


const Menu = () => {
    const {currentTab} = useSelector((state: any) => state.tab);
    const dispatch = useDispatch();

    const school = localStorage.getItem("current_school");

    const changeCurrentTab = (tab: string) => {
        dispatch(setCurrentTab(tab));
        localStorage.setItem("currentTab", tab);
    }
    
    return (
        <Container>
            <Header>
                <LogoImage
                src={SchoolLogoPNG}/>
                <Title>
                {school !== null ? JSON.parse(school).school_name : ""}
                </Title>
            </Header>
            <CategoryList>
                <CategoryItem
                onClick={() => changeCurrentTab("dashboard")}
                style={currentTab === 'dashboard' ? {backgroundColor: '#509CDB'} : {backgroundColor: '#152259'}}
                to={"/dashboard"}>
                    <div>
                    <CategoryIcon
                    src={DashboardIconPNG}/>
                    <CategoryText>
                        대시보드
                    </CategoryText>
                    </div>
                    {currentTab === 'dashboard' && (
                    <RightArrowIcon
                    src={RightArrowIconPNG}/>
                    )}
                </CategoryItem>
                <CategoryItem
                onClick={() => changeCurrentTab("teachers")}
                style={currentTab === 'teachers' ? {backgroundColor: '#509CDB'} : {backgroundColor: '#152259'}}
                to={"/teachers"}>
                    <div>
                    <TeacherIcon
                    src={BankIconPNG}/>
                    <CategoryText>
                        선생님
                    </CategoryText>
                    </div>
                    {currentTab === 'teachers' && (
                    <RightArrowIcon
                    src={RightArrowIconPNG}/>
                    )}
                </CategoryItem>
                <CategoryItem
                onClick={() => changeCurrentTab("students")}
                style={currentTab === 'students' ? {backgroundColor: '#509CDB'} : {backgroundColor: '#152259'}}
                to={"/students"}>
                    <div>
                    <StudentIcon
                    src={StudentIconPNG}/>
                    <CategoryText>
                        학생
                    </CategoryText>
                    </div>{currentTab === 'students' && (
                    <RightArrowIcon
                    src={RightArrowIconPNG}/>
                    )}
                </CategoryItem>
            </CategoryList>
        </Container>
    )
}

export default Menu;