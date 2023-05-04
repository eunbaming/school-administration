import React, {useState} from 'react';
import styled from 'styled-components';

import TeacherDetail from './TeacherDetail';
import SearchIconPNG from '../assets/icons/search_icon.png';
import TeacherListItem from './TeacherListItem';

const Container = styled.div`
display: flex;
flex-direction: column;
padding-left: 40px;
`;

const TeachersDiv = styled.div`
margin-top: 26.5vh;
background-color: #FCFAFA;
display: flex;
`;

const NoTeacherDiv = styled.div`
flex: 1;
min-height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: "KumbhSans-SemiBold";
font-weight: 600;
font-size: 28px;
line-height: 34.73px;
color: #4F4F4F; 

`;

const GuideText = styled.span`
font-family: "KumbhSans-SemiBold";
font-weight: 500;
font-size: 14px;
color: #4F4F4F;
`;


const TeacherListDiv = styled.div`
margin-top: 26.5vh;
top: 0;
bottom: 0;
width: 59.5vw;
overflow-y: scroll;
position: fixed;
`;

const TeacherListAndDetailDiv = styled.div`
display: flex;
flex-direction: row;
`;

interface props {
    teacherArr: any[]
}

const TeacherList = ({teacherArr}: props) => {
    const [curTeacherIndex, setCurTeacherIndex] = useState(0);

    const selectTeacherListItem = (index: number) => {

        setCurTeacherIndex(index); 
    }

    

    return (
        <Container>
            {/*
            <SearchBar>
                <SearchFilterSelect 
                defaultValue={"filter"}>
                    <option key={0} value={"filter"} disabled hidden>filter</option>
                    <option key={1} value={"name"}>name</option>
                    <option key={2} value={"class"}>class</option>
                </SearchFilterSelect>
                <SearchInputDiv>
                    <SearchIcon
                    src={SearchIconPNG}
                    />
                    <SearchInput
                    placeholder='Search for a Teacher by name or email'
                    />
                </SearchInputDiv>
            </SearchBar>
    */}
            <TeachersDiv>
                {teacherArr.length === 0 && (
                    <NoTeacherDiv>
                        No Teachers at this time
                        <GuideText>Teachers will appear here after they enroll in your school.  </GuideText>
                    </NoTeacherDiv>
                )}
                {teacherArr.length > 0 && (
                    <TeacherListAndDetailDiv>
                    <TeacherListDiv>
                        {/*
                    <CategoryDiv>
                        <CategoryItem
                        style={{flex: 1}}>
                            Name
                        </CategoryItem>
                        <CategoryItem
                        style={{flex: 1}}>
                            Subject
                        </CategoryItem>
                        <CategoryItem
                        style={{flex: 1}}>
                            Class
                        </CategoryItem>

                        <CategoryItem
                        style={{flex: 1}}>
                            Gender
                        </CategoryItem>
                        {
                        <CategoryItem
                        style={{flex: 1.5}}>
                            Email
                        </CategoryItem>
                }
                    </CategoryDiv>

                */}
                    {teacherArr.map((item, index) => {
                        return (
                            <TeacherListItem
                            index={index}
                            selectTeacherListItem={selectTeacherListItem}
                            key={index}
                            teacher={item}/>
                        )
                    })}
                    </TeacherListDiv>
                    <TeacherDetail
                    teacher={teacherArr[curTeacherIndex]}/>
                    </TeacherListAndDetailDiv>
                )}
            </TeachersDiv>
        </Container>

    )
}

export default TeacherList;
