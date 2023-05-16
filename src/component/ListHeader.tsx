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
font-weight: 700;
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


    const searchTeachers = (keywordValue: string) => {
        if(keywordValue === '') {
            dispatch(setFilteredTeachers(teachers))
        } else {
            const filteredTeachers = teachers.filter((item: any) => {
                if(filter === 'phone number') {
                    return item['phone_number'].includes(keywordValue)
                } else if(filter === 'class') {
                    return (item[filter]).toString().includes(keywordValue)
                } else if(filter === 'email') {
                    return item['email_address'].includes(keywordValue)
                } else if(filter === 'gender') {
                    if(keyword === '남성' || '남' || '남자') {
                        return item['gender'] == 1
                    } else if(keyword === '여성' || '여' || '여자') {
                        return item['gender'] == 2
                    }
                } else if(filter === 'name') {    
                        return item[filter].toLowerCase().includes(keywordValue.toLowerCase())
                } else if(filter === 'subject') {
                    if(keyword.includes('국')) return item[filter] === 1
                    if(keyword.includes('영')) return item[filter] === 2
                    if(keyword.includes('수')) return item[filter] === 3
                    if(keyword.includes('사')) return item[filter] === 4
                    if(keyword.includes('과')) return item[filter] === 5
                }  
            })
        dispatch(setFilteredTeachers(filteredTeachers))
        }


    }

    const selectFilter = (e: any) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <Container>
            <TitleDiv>
            <TeachersTitle>선생님 목록</TeachersTitle>
            <AddTeacherBtn
            onClick={() => onClickAddTeacherButton()}>선생님 등록</AddTeacherBtn>
            </TitleDiv>

            <SearchBar>
                <SearchFilterSelect onChange={selectFilter}
                defaultValue={"name"}>
                    <option key={"name"} value={"name"}>이름</option>
                    <option key={"subject"} value={"subject"}>과목</option>
                    <option key={"class"} value={"class"}>담당 학년</option>
                    <option key={"gender"} value={"gender"}>성별</option>
                    <option key={"email"} value={"email"}>이메일</option>
                    <option key={"phoneNumber"} value={"phone number"}>전화번호</option>
                </SearchFilterSelect>
                <SearchInputDiv>
                    <SearchIcon
                    src={SearchIconPNG}
                    />
                    <SearchInput
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder={`선생님을 검색하세요.`}
                    />
                </SearchInputDiv>
            </SearchBar>
            <CategoryDiv>
                        <CategoryItem
                        style={{flex: 1}}>
                            이름
                        </CategoryItem>
                        <CategoryItem
                        style={{flex: 1}}>
                            과목
                        </CategoryItem>
                        <CategoryItem
                        style={{flex: 1}}>
                            담당 학년
                        </CategoryItem>

                        <CategoryItem
                        style={{flex: 1}}>
                            성별
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