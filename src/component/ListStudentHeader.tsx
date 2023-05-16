import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIconPNG from "../assets/icons/search_icon.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredSelect,
  setFilteredStudents,
} from "../redux/students/state";

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
const StudentArea = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
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
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
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

const Category = styled.div`
  display: flex;
  background-color: white;
  padding-top: 16px;
  padding-left: 47px;
  width: 60vw;
`;

const Item = styled.div`
  font-family: "KumbhSans-SemiBold";
  font-size: 14px;
  font-weight: 700;
  background-color: white;
`;

interface props {
  onClickAddStudentButton: () => void;
}

const ListStudentHeader = ({ onClickAddStudentButton }: props) => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const { filter, students } = useSelector((state: any) => state.student);

  useEffect(() => {
    searchStudents(keyword);
  }, [keyword]);

  const selectFilter = (event: any) => {
    dispatch(setFilteredSelect(event.target.value));
  };

  const searchStudents = (keyword: string) => {
    if (keyword === "") {
      dispatch(setFilteredStudents(students));
    } else {
      const filteredStudents = students.filter((item: any) => {
        if (filter === "name") {
          return item["name"].toLowerCase().includes(keyword.toLowerCase());
        } else if (filter === "class") {
          return item[filter].toString().includes(keyword);
        } else if (filter === "email") {
          return item["email"].includes(keyword);
        } else if (filter === "phone number") {
          return item["phone_number"].includes(keyword);
        }
      });
      dispatch(setFilteredStudents(filteredStudents));
    }
  };

  return (
    <Container>
      <StudentArea>
        <Student>Students</Student>
        <Add onClick={onClickAddStudentButton}>Add Student</Add>
      </StudentArea>

      <FilterSearch>
        <Filter onChange={selectFilter} defaultValue={"name"}>
          <Option key={"name"} value={"name"}>
            name
          </Option>
          <Option key={"class"} value={"class"}>
            class
          </Option>
          <Option key={"email"} value={"email"}>
            email
          </Option>
          <Option key={"phone number"} value={"phone number"}>
            phone number
          </Option>
        </Filter>
        <SearchInput>
          <SearchIcon src={SearchIconPNG} />
          <Search
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Search for a student by name or class"
          ></Search>
        </SearchInput>
      </FilterSearch>

      <Category>
        <Item style={{ flex: 1 }}>Name</Item>
        <Item style={{ flex: 1 }}>Student ID</Item>
        <Item style={{ flex: 1 }}>Class</Item>
        <Item style={{ flex: 1 }}>Gender</Item>
        <Item style={{ flex: 1.5 }}>Email address</Item>
      </Category>
    </Container>
  );
};

export default ListStudentHeader;
