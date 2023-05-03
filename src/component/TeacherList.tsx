import React from 'react';
import styled from 'styled-components';

import SearchIconPNG from '../assets/icons/search_icon.png';
import TeacherListItem from './TeacherListItem';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 75vw;
`;

const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SearchFilterSelect = styled.select`
color: #c3c3c3;
font-size: 14px;
font-weight: 500;
padding: 16px;
border: none;
&:focus {
        outline: none;
    }
`;

const SearchInputDiv = styled.div`
margin-left: 30px;
flex: 1;
    display: flex;
    flex-direction: row;
    background-color: #FCFAFA;
    align-items: center;
    padding-left: 16px;
`;

const SearchInput = styled.input`
flex: 1;
    font-family: "KumbhSans-SemiBold";
    font-weight: 500;
    font-size: 14px;
    color: #8A8A8A;
    background-color: #FCFAFA;
    border: none;
    padding: 16px;

    &:focus {
        outline: none;
    }
`;

const SearchIcon = styled.img`
    width: 16px;
    height: 16px;
`;

const TeachersDiv = styled.div`
margin-top: 10px;
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

const CategoryDiv = styled.div`
display: flex;
 background-color: white;
 padding-top: 16px;
`;

const TeacherListDiv = styled.div`
flex: 1;
`;

const CategoryItem = styled.span`
    padding: 0px 8px 16px 8px;
    font-family: "KumbhSans-SemiBold";
    font-size: 14px;
    font-weight: 700;
    background-color: white;   
`;

interface props {
    teacherArr: any[]
}

const TeacherList = ({teacherArr}: props) => {

    

    return (
        <Container>
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
            <TeachersDiv>
                {teacherArr.length === 0 && (
                    <NoTeacherDiv>
                        No Teachers at this time
                        <GuideText>Teachers will appear here after they enroll in your school.  </GuideText>
                    </NoTeacherDiv>
                )}
                {teacherArr.length > 0 && (
                    <TeacherListDiv>
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
                        <CategoryItem
                        style={{flex: 1.5}}>
                            Email
                        </CategoryItem>
                    </CategoryDiv>
                    {teacherArr.map((item, index) => {
                        return (
                            <TeacherListItem
                            key={index}
                            teacher={item}/>
                        )
                    })

                    }
                    </TeacherListDiv>
                )}
            </TeachersDiv>
        </Container>

    )
}

export default TeacherList;
