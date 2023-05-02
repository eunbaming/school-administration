import React, { useState } from "react";
import styled from "styled-components";
import ModalArea from "../component/ModalArea";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StudentArea = styled.div`
  width: 1040px;
  display: flex;
  justify-content: space-between;
  ali
  padding: 14px 0 14px 16px;
  margin-bottom: 30px;
`;

const Student = styled.div`
  width: 67px;
  height: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f4f4f;
  text-align: center;
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
  border: none;
  background: #2d88d4;
  color: #fff;
  padding: 12px 14px 12px 14px;
  border-radius: 5px;
  font-weight: 600;
`;

const FilterSearch = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 49px;
`;

const Filter = styled.select`
  width: 140px;
  border: none;
  color: #cacaca;
`;

const Option = styled.option``;

const SearchArea = styled.div`
  display: flex;
`;

const Search = styled.input`
  width: 820px;
  border: none;
  background-color: #fcfafa;
  border-radius: 5px;
  padding: 5px 0 5px 35px;
  box-sizing: border-box;
  background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
  background-position: 5px center;
  background-size: 25px;
  background-repeat: no-repeat;
`;

const Board = styled.div`
  width: 952px;
  height: 419px;
  background-color: #fcfafa;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoStudent = styled.h1`
  font-family: "KumbhSans";
  font-weight: 600;
  font-size: 28px;
  color: #4f4f4f;
  margin: 0 0 7px 0;
`;

const Explanation = styled.div`
  font-family: "KumbhSans";
  font-weight: 500;
  font-size: 14px;
  color: #4f4f4f;
`;

const Students = () => {
  const [modal, setModal] = useState(false);
  const goToModal = () => {
    setModal(true);
    document.body.style.cssText = `background: #ddd`;
  };
  return (
    <Container>
      {modal && <ModalArea />}
      <StudentArea>
        <Student>Students</Student>
        <Button>
          <Export>Export CSV</Export>
          <Add onClick={goToModal}>Add Student</Add>
        </Button>
      </StudentArea>
      <FilterSearch>
        <Filter>
          <Option value="0">Add filter</Option>
          <Option value="1">one</Option>
          <Option value="2">two</Option>
          <Option value="3">three</Option>
        </Filter>
        <Search placeholder="Search for a student by name or email"></Search>
      </FilterSearch>
      <Board>
        <NoStudent>No students at this time</NoStudent>
        <Explanation>
          Students will appear here after they enroll in your school.
        </Explanation>
      </Board>
    </Container>
  );
};

export default Students;
