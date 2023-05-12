import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTeacher, setEditModal } from "../redux/teachers/state";
import styled from "styled-components";

import { rootUrl } from "../server";

import NoProfileImagePNG from "../assets/noProfile.png";
import CloseIconPNG from "../assets/icons/close_icon.png";
import BlankProfileImagePNG from "../assets/blank_profile.jpg";

const Container = styled.div`
  min-width: 35rem;
  z-index: 32;
  position: absolute;
  top: 30px;
  left: 20rem;
  width: 62vw;
  background-color: white;
  padding-top: 32px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 32px;
`;

const TitleDiv = styled.div`
  font-family: "KumbhSans-SemiBold";
  font-size: 26px;
  font-weight: 600;
  line-height: 40px;
  color: #4f4f4f;
`;

const AddTeacherForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LeftForm = styled.div`
  backgground-color: white;
  margin-top: 13px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RightForm = styled.div`
  background-color: white;
  margin-top: 13px;
  margin-left: 60px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.span`
  margin-top: 27px;
  font-family: "KumbhSans-Regular";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: #8a8a8a;
`;

const InfoInput = styled.input`
  padding: 11px;
  margin-top: 4px;
  font-family: "KumbhSans-Regular";
  font-size: 14px;
  font-weight: 500;
  color: #4f4f4f;
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;
`;

const NumberInput = styled.input`
  padding: 11px;
  margin-top: 4px;
  font-family: "KumbhSans-Regular";
  font-size: 14px;
  font-weight: 500;
  color: #4f4f4f;
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const AboutTextarea = styled.textarea`
  padding: 11px;
  margin-top: 4px;
  font-family: "KumbhSans-Regular";
  font-size: 14px;
  font-weight: 500;
  color: #4f4f4f;
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;
  resize: none;
`;

const InfoSelect = styled.select`
  height: 42px;
  font-family: "KumbhSans-Regular";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  margin-top: 32px;
  padding: 11px;
  border: 0.5px solid #a7a7a7;
  border-radius: 4px;

  -webkit-appearance: none; /* 크롬 화살표 없애기 */
  -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
  appearance: none; /* 화살표 없애기 */
`;

const ProfileImgDiv = styled.div`
  margin-top: 55px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 16vw;
  height: 16vw;
  min-width: 13rem;
  min-height: 13rem;
  border-radius: 200px;
  z-index: 10;
  object-fit: cover;
`;

const ProfileImgInput = styled.input`
  position: absolute;
  display: none;
`;

const AddTeacherButtonDiv = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

interface AddTeacherButtonProps {
  isVaild: boolean;
}

const AddTeacherButton = styled.button<AddTeacherButtonProps>`
  width: 131px;
  padding: 12px 23px;
  font-family: "KumbhSans-SemiBold";
  font-size: 14px;
  font-weight: 600;
  color: white;
  background-color: ${(props) => (props.isVaild ? "#509CDB" : "#E9E9E9")};
  border-radius: 4px;
  border: none;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 33px;
  right: 33px;
  width: 25px;
  height: 25px;
  opacity: 0.7;
`;


interface props {
  teacher: any;
  submitEditTeacher: (teacher: any) => void;
  closeModal: () => void;
}

const EditTeacherModal = ({
  teacher,
  submitEditTeacher,
  closeModal,
}: props) => {
  console.log("EditTeacherModal teacher", teacher);
  const [isVaild, setIsVaild] = useState(false);
  const [name, setName] = useState<string>(teacher.name);
  const [phoneNumber, setPhoneNumber] = useState(teacher.phone_number);
  const [email, setEmail] = useState(teacher.email_address);
  const [identificationNumber, setIdentificationNumber] = useState(
    teacher.email
  );
  const [password, setPassword] = useState(teacher.password);
  const [about, setAbout] = useState(teacher.user_about);

  const [teacherClass, setTeacherClass] = useState(teacher.class);
  const [gender, setGender] = useState(teacher.gender);
  const [subject, setSubject] = useState(teacher.subject);

  const imgInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImageSrc, setProfileImageSrc]: any = useState(`${rootUrl}/${teacher.profile_image_url}`);
  const [imageFile, setImageFile] = useState<any>();

  const dispatch = useDispatch();

  
  useEffect(() => {
    if (
      name.length > 0 &&
      phoneNumber.length > 0 &&
      email.length > 0 &&
      identificationNumber.length > 0 &&
      teacherClass.toString().length > 0 &&
      gender.toString().length > 0 &&
      subject.toString().length > 0
    ) {
      setIsVaild(true);
    } else {
      setIsVaild(false);
    }
  }, [
    name,
    phoneNumber,
    email,
    identificationNumber,
    gender,
    subject,
    teacherClass,
  ]);
  

  const onUploadProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise<void>((resolve) => {
        reader.onload = () => {
          setProfileImageSrc(reader.result || null);
          resolve();
        };
      });
    }
  };

  const onClickProfileImg = () => {
    if (!imgInputRef.current) {
      return;
    }

    imgInputRef.current.click();
  };

  const onClickEditTeacher = (e: any) => {
    e.preventDefault();

    if (isVaild) {
      dispatch(setEditModal(false));

      const school = localStorage.getItem("current_school");

      const teacherObj = {
        id: teacher.id,
        name,
        email: identificationNumber,
        password,
        email_address: email,
        grade: Number(teacherClass),
        class: Number(teacherClass),
        subject: Number(subject),
        gender: Number(gender),
        phone_number: phoneNumber,
        image: imageFile,
        user_about: about,
        edited: true,
        image_url: profileImageSrc,
        schoold_id: school !== null ? JSON.parse(school).school_id : ""
      }
      submitEditTeacher(teacherObj);
    }
  };

  const selectClass = (e: any) => {
    setTeacherClass(e.target.value);
  };

  const selectGender = (e: any) => {
    setGender(e.target.value);
  };

  const selectSubject = (e: any) => {
    setSubject(e.target.value);
  };

  const changeName = (e: any) => {
    setName(e.target.value);
  };

  const changePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const changeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const changeIdentificationNumber = (e: any) => {
    setIdentificationNumber(e.target.value);
  };

  const changePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const changeAbout = (e: any) => {
    setAbout(e.target.value);
  };

  return (
    <Container>
      <AddTeacherForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          onClickEditTeacher(e)
        }
      >
        <TitleDiv>선생님 수정</TitleDiv>
        <div style={{ display: "flex", background: "white" }}>
          <LeftForm>
            <InfoLabel>이름</InfoLabel>
            <InfoInput value={name} onChange={changeName} />
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <InfoSelect
                onChange={selectClass}
                style={{ flex: 1 }}
                defaultValue={teacherClass}
              >
                <option disabled hidden>
                  담당 학년
                </option>
                <option key={1} value={1}>
                  1학년
                </option>
                <option key={2} value={2}>
                  2학년
                </option>
                <option key={3} value={3}>
                  3학년
                </option>
              </InfoSelect>
              <InfoSelect
                onChange={selectGender}
                defaultValue={gender}
                style={{ marginLeft: "19px", flex: 1 }}
              >
                <option disabled hidden>
                 성별
                </option>
                <option key={1} value={1}>
                 남성
                </option>
                <option key={2} value={2}>
                여성
                </option>
              </InfoSelect>
            </span>
            <InfoSelect onChange={selectSubject} defaultValue={subject}>
              <option disabled hidden>
                과목
              </option>
              <option key={1} value={1}>
                국어
              </option>
              <option key={2} value={2}>
                영어
              </option>
              <option key={3} value={3}>
                수학
              </option>
              <option key={4} value={4}>
                사회
              </option>
              <option key={5} value={5}>
                과학
              </option>
            </InfoSelect>
            <ProfileImgDiv>
              <ProfileImg
                onClick={() => onClickProfileImg()}
                src={profileImageSrc}
              />
              <ProfileImgInput
                ref={imgInputRef}
                onChange={onUploadProfileImage}
                type={"file"}
                accept={"image/*"}
              />
            </ProfileImgDiv>
          </LeftForm>
          <RightForm>
            <InfoLabel>전화번호</InfoLabel>
            <NumberInput
              onKeyDown={(e) =>
                ["e", "E", "+"].includes(e.key) && e.preventDefault()
              }
              type={"number"}
              value={phoneNumber}
              onChange={changePhoneNumber}
            />
            <InfoLabel>이메일</InfoLabel>
            <InfoInput value={email} onChange={changeEmail} />
            <InfoLabel>교번</InfoLabel>
            <InfoInput
              value={identificationNumber}
              onChange={changeIdentificationNumber}
            />
            {/*
            <InfoLabel>Password</InfoLabel>
            <InfoInput value={password} onChange={changePassword} />
            */}
            <InfoLabel>참고 사항</InfoLabel>
            <AboutTextarea value={about} onChange={changeAbout} rows={8} />
            <AddTeacherButtonDiv>
              <AddTeacherButton isVaild={isVaild} type={"submit"}>
                Edit Teacher
              </AddTeacherButton>
            </AddTeacherButtonDiv>
          </RightForm>
        </div>
      </AddTeacherForm>
      <CloseIcon onClick={() => closeModal()} src={CloseIconPNG} />
    </Container>
  );
};

export default EditTeacherModal;
