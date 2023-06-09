import React, { useEffect } from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useMemo } from "react";

import NoProfileImg from "../assets/noProfile.png";
import { useDispatch } from "react-redux";
import { setEditModal } from "../redux/students/state";

const Container = styled.div``;

const Modal = styled.div`
  z-index: 32;
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

interface AddStudentButtonProps {
  isValid: boolean;
}

const AddStudent = styled.button<AddStudentButtonProps>`
  width: 131px;
  padding: 12px 14px;
  background-color: ${(props) => (props.isValid ? "#509CDB" : "#E9E9E9")};
  border: none;
  border-radius: 4px;
  font-family: "KumbhSans";
  font-weight: 600;
  font-size: 14px;
  color: #4f4f4f;
  cursor: pointer;
`;

interface props {
  student: any;
  submitEditStudent: (
    name: string,
    studentClass: string | undefined,
    gender: string | undefined,
    phone: string | undefined,
    email: string | undefined,
    idNum: string | undefined,
    password: string | undefined,
    profileImageUrl: string | undefined
  ) => void;
}

const FileUploadContainer = styled.div``;

const FileUploadForm = styled.form``;

const FileInput = styled.input`
  display: none;
`;

const BlankImage = styled.img`
  width: 200px;
`;

const UploadedImage = styled.img`
  width: 200px;
  height: 200px;
  border: 0.5px solid #ddd;
  border-radius: 50%;
`;

type UploadImage = {
  file: File;
  thumbnail: string;
  type: string;
};

const EditStudentModal = ({ student, submitEditStudent }: props) => {
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();

  const [name, setName] = useState(student.name);
  const [selectClass, setSelectClass] = useState(student.class);
  const [gender, setGender] = useState(student.gender);
  const [email, setEmail] = useState(student.email);
  const [phone, setPhone] = useState(student.phoneNumber);
  const [idNum, setIdNum] = useState(student.id);
  const [password, setPassword] = useState(student.password);

  console.log(student);

  useEffect(() => {
    if (
      name.length > 0 &&
      selectClass.length > 0 &&
      gender.length > 0 &&
      email.length > 0 &&
      phone.length > 0 &&
      String(idNum).length > 0
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, selectClass, gender, email, phone, idNum]);

  const onClickEditStudent = (event: any) => {
    event.preventDefault();

    if (isValid) {
      console.log("onClickEditStudent")
      dispatch(setEditModal(false));
      submitEditStudent(
        name,
        selectClass,
        gender,
        phone,
        email,
        idNum,
        password,
        imageFile?.thumbnail
      );
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<UploadImage | null>(null);
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };
  const uploadProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    // const length = fileList?.length;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };
  const showImage = useMemo(() => {
    if (!imageFile && imageFile == null) {
      return <BlankImage onClick={handleClickFileInput} src={NoProfileImg} />;
    }
    return (
      <UploadedImage
        src={imageFile.thumbnail}
        alt={imageFile.type}
        onClick={handleClickFileInput}
      />
    );
  }, [imageFile]);

  return (
    <Container>
      <Modal>
        <Add>Edit Student</Add>
        <Form onSubmit={(event) => onClickEditStudent(event)}>
          <NameArea>
            <NameLabel>Name</NameLabel>
            <NameInputs>
              <Name
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Select
                defaultValue={selectClass}
                onChange={(event: any) => setSelectClass(event.target.value)}
              >
                <Option disabled hidden>
                  Class
                </Option>
                <Option key={1} value={"1"}>
                  SS 3
                </Option>
                <Option key={2} value={"2"}>
                  JSS 1
                </Option>
                <Option key={3} value={"3"}>
                  JSS 2
                </Option>
              </Select>
              <Select
                defaultValue={gender}
                onChange={(event: any) => setGender(event.target.value)}
              >
                <Option disabled hidden>
                  Gender
                </Option>
                <Option key={"Male"} value={"Male"}>
                  Male
                </Option>
                <Option key={"Female"} value={"Female"}>
                  Female
                </Option>
              </Select>
            </NameInputs>
          </NameArea>
          <Upload>
            <FileUploadContainer>
              {showImage}
              <FileUploadForm>
                <FileInput
                  src={imageFile?.thumbnail}
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  ref={fileInputRef}
                  onChange={(event) => uploadProfile(event)}
                />
              </FileUploadForm>
            </FileUploadContainer>
            <EmailPhonePassword>
              <Group>
                <GroupLabel>Email address</GroupLabel>
                <GroupInput
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Group>
              <Group>
                <GroupLabel>Phone number</GroupLabel>
                <GroupInput
                  onKeyDown={(e) =>
                    ["e", "E", "+"].includes(e.key) && e.preventDefault()
                  }
                  type={"number"}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </Group>
              <Group>
                <GroupLabel>Identification number</GroupLabel>
                <GroupInput
                  value={idNum}
                  onChange={(event) => setIdNum(event.target.value)}
                />
              </Group>
              <Group>
                <GroupLabel>Password</GroupLabel>
                <GroupInput
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Group>
            </EmailPhonePassword>
          </Upload>
          <AddStudent isValid={isValid} type="submit">
            Edit Student
          </AddStudent>
        </Form>
      </Modal>
    </Container>
  );
};

export default EditStudentModal;