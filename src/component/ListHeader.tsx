import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { setFilter, setFilteredTeachers } from '../redux/teachers/state';

import SearchIconPNG from '../assets/icons/search_icon.png';



const Container = styled.div`
z-index: 10;
position: fixed;
top: 0.5rem;
background-color: white;
height: 26.5vh;
width: 83.1vw;
display: flex;
flex-direction: column;

`;

const TitleDiv = styled.div`
padding-top: 50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding-left: 30px;
padding-right: 30px;
`;

const TeachersTitle = styled.span`
font-family: 'KumbhSans-SemiBold';
font-size: 16px;
font-weight: 500;
line-height: 20px;
color: #4F4F4F;
`;


const AddTeacherBtn = styled.button`
padding: 12px 14px;
font-family: 'KumbhSans-SemiBold';
font-size: 14px;
font-weight: 600;
line-height: 17px;
background-color: #509CDB;
border: none;
color: white;
border-radius: 4px;
`;

const SearchBar = styled.div`
margin-top: 10px;
padding-left: 30px;
padding-right: 30px;
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

const CategoryDiv = styled.div`
display: flex;
 background-color: white;
 padding-top: 16px;
 padding-left: 47px;
 width: 60vw;
`;

const CategoryItem = styled.span`
    font-family: "KumbhSans-SemiBold";
    font-size: 14px;
    font-weight: 700;
    background-color: white;   
`;

interface props {
    onClickAddTeacherButton: () => void;
}

const ListHeader = ({onClickAddTeacherButton}: props) => {
    const [keyword, setKeyword] = useState('');
    const {filter, teachers} = useSelector((state: any) => state.teacher);
    const dispatch = useDispatch();

    useEffect(() => {
        searchTeachers(keyword);
    }, [keyword])

    useEffect(() => {
        console.log("filter", filter);
    }, [filter])

    const searchTeachers = (keywordValue: string) => {
        const filteredTeachers = teachers.filter((item: any) => {
            if(filter === 'phone number') {
                return item['phoneNumber'].includes(keywordValue)
            }
            if(filter === 'class') {
                return item[filter].includes(keywordValue)
            } else {
                return item[filter].toLowerCase().includes(keywordValue.toLowerCase())
            }
        })

        dispatch(setFilteredTeachers(filteredTeachers))

    }

    const selectFilter = (e: any) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <Container>
            <TitleDiv>
            <TeachersTitle>Teachers</TeachersTitle>
            <AddTeacherBtn
            onClick={() => onClickAddTeacherButton()}>Add Teacher</AddTeacherBtn>
            </TitleDiv>

            <SearchBar>
                <SearchFilterSelect onChange={selectFilter}
                defaultValue={"name"}>
                    <option key={"name"} value={"name"}>name</option>
                    <option key={"subject"} value={"subject"}>subject</option>
                    <option key={"class"} value={"class"}>class</option>
                    <option key={"gender"} value={"gender"}>gender</option>
                    <option key={"email"} value={"email"}>email</option>
                    <option key={"phoneNumber"} value={"phone number"}>phone number</option>
                </SearchFilterSelect>
                <SearchInputDiv>
                    <SearchIcon
                    src={SearchIconPNG}
                    />
                    <SearchInput
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder={`Search for a Teacher by ${filter}`}
                    />
                </SearchInputDiv>
            </SearchBar>
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
                        {/*
                        <CategoryItem
                        style={{flex: 1.5}}>
                            Email
                        </CategoryItem>
                */}
                    </CategoryDiv>

        </Container>
    )

}

export default ListHeader;