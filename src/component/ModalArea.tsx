import React from "react";
import styled from "styled-components";
import ImageForm from "./ImageForm";

const Container = styled.div``;

const Modal = styled.div`
  position: absolute;
  top: 57px;
  left: 323px;
  width: 969px;
  height: 600px;
  border: 1px solid blue;
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

const EmailPhonePassword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 10px 0;
`;

const EmailLabel = styled.label`
  color: #8a8a8a;
  font-size: 14px;
  font-family: "KumbhSans";
`;

const EmailInput = styled.input`
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;
  width: 324px;
  height: 40px;
  margin-right: 30px;
`;

const Phone = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 10px 0;
`;

const PhoneLabel = styled.label`
  color: #8a8a8a;
  font-size: 14px;
  font-family: "KumbhSans";
`;

const PhoneInput = styled.input`
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;
  width: 324px;
  height: 40px;
  margin-right: 30px;
`;

const PasswordArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 10px 0;
`;

const PasswordLabel = styled.label`
  color: #8a8a8a;
  font-size: 14px;
  font-family: "KumbhSans";
`;

const PasswordInput = styled.input`
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;
  width: 324px;
  height: 40px;
  margin-right: 30px;
`;

const Option = styled.option``;

const AddStudent = styled.button`
  width: 131px;
  padding: 12px 14px;
  margin-top: 50px;
  background: #f1f1f1;
  border: none;
  border-radius: 4px;
  font-family: "KumbhSans";
  font-weight: 600;
  font-size: 14px;
  color: #4f4f4f;
`;

const ModalArea = () => {
  return (
    <Container>
      <Modal>
        <Add>Add Students</Add>
        <Buttons>
          <Button>Manually</Button>
          <Button>Import CSV</Button>
        </Buttons>
        <Form>
          <NameArea>
            <NameLabel>Name</NameLabel>
            <NameInputs>
              <Name />
              <Select>
                <Option>Class</Option>
                <Option>1</Option>
                <Option>2</Option>
              </Select>
              <Select>
                <Option>Gender</Option>
                <Option>1</Option>
                <Option>2</Option>
              </Select>
            </NameInputs>
          </NameArea>
          <EmailPhonePassword>
            <Email>
              <EmailLabel>Email address</EmailLabel>
              <EmailInput />
            </Email>
            <Phone>
              <PhoneLabel>Phone number</PhoneLabel>
              <PhoneInput />
            </Phone>
            <PasswordArea>
              <PasswordLabel>Password</PasswordLabel>
              <PasswordInput />
            </PasswordArea>
          </EmailPhonePassword>
          {/* <ImageForm /> */}
        </Form>
        <AddStudent>Add Student</AddStudent>
      </Modal>
    </Container>
  );
};

export default ModalArea;
