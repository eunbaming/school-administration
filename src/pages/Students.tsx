import React, { useState } from "react";
import styled from "styled-components";

import SearchIconPNG from "../assets/icons/search_icon.png";
import ModalArea from "../component/ModalArea";
import StudentListItem from "../component/StudentListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-top: 60px;
  padding-bottom: 120px;
`;

const StudentArea = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 8px 14px 8px;
`;

const Student = styled.div`
  font-family: "KumbhSans-SemiBold";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f4f4f;
`;

const Button = styled.div`
  margin-right: 30px;
`;

const Export = styled.button`
  padding: 12px 14px 12px 14px;
  border: none;
  background: none;
  font-size: 14px;
  color: #2d88d4;
  font-weight: 600;
`;

const Add = styled.button`
  padding: 12px 14px;
  font-family: "KumbhSans-SemiBold";
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  background-color: #509cdb;
  border: none;
  color: white;
  border-radius: 4px;
`;

const FilterSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 75vw;
`;

const Filter = styled.select`
  color: #c3c3c3;
  font-size: 14px;
  font-weight: 500;
  padding: 16px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const SearchArea = styled.div`
  display: flex;
`;

const Search = styled.input`
  flex: 1;
  font-family: "KumbhSans-SemiBold";
  font-weight: 500;
  font-size: 14px;
  color: #8a8a8a;
  background-color: #fcfafa;
  border: none;
  padding: 16px;

  &:focus {
    outline: none;
  }
`;

const Board = styled.div`
  // width: 952px;
  // height: 419px;
  // background-color: #fcfafa;
  // margin: 20px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  margin-top: 10px;
  background-color: #fcfafa;
  display: flex;
  width: 75vw;
`;

const NoStudent = styled.h1`
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
  color: #4f4f4f;
`;

const Explanation = styled.div`
  font-family: "KumbhSans-SemiBold";
  font-weight: 500;
  font-size: 14px;
  color: #4f4f4f;
`;

const StudentList = styled.div`
  flex: 1;
`;

const Category = styled.div`
  display: flex;
  background-color: white;
  padding-top: 16px;
`;

const Item = styled.div`
  padding: 0px 8px 16px 8px;
  font-family: "KumbhSans-SemiBold";
  font-size: 14px;
  font-weight: 700;
  background-color: white;
`;

const SearchInput = styled.div`
  margin-left: 30px;
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: #fcfafa;
  align-items: center;
  padding-left: 16px;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const BlackScreen = styled.div`
  position: fixed;
  background-color: #00000050;
  width: 100vw;
  height: 100vh;
`;

interface props {
  studentArr: any[];
}

const Students = ({ studentArr }: props) => {
  const [modal, setModal] = useState(false);
  const goToModal = () => {
    setModal(true);
  };

  return (
    <>
      {modal && <BlackScreen />}
      <Container>
        {modal && <ModalArea />}
        <StudentArea>
          <Student>Students</Student>
          <Add onClick={goToModal}>Add Student</Add>
        </StudentArea>
        <FilterSearch>
          <Filter>
            <Option key={0} value={"filter"}>
              Add filter
            </Option>
            <Option key={1} value={"name"}>
              name
            </Option>
            <Option key={2} value={"class"}>
              class
            </Option>
          </Filter>
          <SearchInput>
            <SearchIcon src={SearchIconPNG} />
            <Search placeholder="Search for a student by name or email"></Search>
          </SearchInput>
        </FilterSearch>
        <Board>
          {studentArr.length === 0 && (
            <NoStudent>
              No students at this time
              <Explanation>
                Students will appear here after they enroll in your school.
              </Explanation>
            </NoStudent>
          )}
          {studentArr.length > 0 && (
            <StudentList>
              <Category>
                <Item style={{ flex: 1.5 }}>Name</Item>
                <Item style={{ flex: 1 }}>Student ID</Item>
                <Item style={{ flex: 1.5 }}>Email address</Item>
                <Item style={{ flex: 1 }}>Class</Item>
                <Item style={{ flex: 1 }}>Gender</Item>
              </Category>
              {studentArr.map((item, index) => {
                return <StudentListItem key={index} student={item} />;
              })}
            </StudentList>
          )}
        </Board>
      </Container>
    </>
  );
};

export default Students;
