import React, { useRef } from "react";
import styled from "styled-components";
import ImageForm from "./ImageForm";

const Container = styled.div``;

const Modal = styled.div`
  position: absolute;
  top: 57px;
  left: 323px;
  width: 969px;
  height: 600px;
  background-color: #fff;
  padding: 50px;
  box-sizing: border-box;
`;

const Add = styled.h1`
  font-size: 32px;
  font-family: "KumbhSans";
  font-weight: 600;
  color: #4f4f4f;
`;

const Buttons = styled.div`
  margin-bottom: 30px;
`;

const Button = styled.button`
  border: none;
  background: none;
  color: #4f4f4f;
  font-family: "KumbhSans";
  font-size: 18px;
  font-weight: 500;
`;

const Form = styled.form``;

const NameArea = styled.div`
  margin: 30px 0;
`;

const NameLabel = styled.label`
  color: #8a8a8a;
  font-size: 14px;
  font-family: "KumbhSans";
`;

const NameInputs = styled.div``;

const Name = styled.input`
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;
  width: 248px;
  height: 40px;
  margin-right: 30px;
  padding: 5px 0 5px 10px;
  box-sizing: border-box;
`;

const Select = styled.select`
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;
  // padding: 16px;
  width: 179px;
  height: 42px;
  margin-right: 30px;
  color: #c4c4c4;
`;

const Upload = styled.div`
  display: flex;
  justify-content: space-around;
`;

const EmailPhonePassword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 10px 0;
`;

const GroupLabel = styled.label`
  color: #8a8a8a;
  font-size: 14px;
  font-family: "KumbhSans";
`;

const GroupInput = styled.input`
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;
  width: 324px;
  height: 40px;
  margin-right: 30px;
  padding: 5px 0 5px 10px;
  box-sizing: border-box;
`;

const Option = styled.option``;

const AddStudent = styled.button`
  width: 131px;
  padding: 12px 14px;
  background: #f1f1f1;
  border: none;
  border-radius: 4px;
  font-family: "KumbhSans";
  font-weight: 600;
  font-size: 14px;
  color: #4f4f4f;
  cursor: pointer;
`;

const ModalArea = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleFocusName = () => {
    nameInputRef.current?.focus();
  };

  return (
    <Container>
      <Modal>
        <Add>Add Students</Add>
        <Buttons>
          <Button onClick={handleFocusName}>Manually</Button>
          <Button>Import CSV</Button>
        </Buttons>
        <Form>
          <NameArea>
            <NameLabel>Name</NameLabel>
            <NameInputs>
              <Name ref={nameInputRef} />
              <Select>
                <Option value="default">Class</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
              <Select>
                <Option value="default">Gender</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </NameInputs>
          </NameArea>
          <Upload>
            <ImageForm />
            <EmailPhonePassword>
              <Group>
                <GroupLabel>Email address</GroupLabel>
                <GroupInput />
              </Group>
              <Group>
                <GroupLabel>Phone number</GroupLabel>
                <GroupInput />
              </Group>
              <Group>
                <GroupLabel>Identification number</GroupLabel>
                <GroupInput />
              </Group>
              <Group>
                <GroupLabel>Password</GroupLabel>
                <GroupInput />
              </Group>
            </EmailPhonePassword>
          </Upload>
        </Form>
        <AddStudent>Add Student</AddStudent>
      </Modal>
    </Container>
  );
};

export default ModalArea;
