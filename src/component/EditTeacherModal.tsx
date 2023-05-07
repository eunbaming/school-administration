import React, {useRef, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {editTeacher, setEditModal} from '../redux/teachers/state'; 
import styled from 'styled-components';

import NoProfileImagePNG from '../assets/noProfile.png';
import CloseIconPNG from '../assets/icons/close_icon.png';
import BlankProfileImagePNG from '../assets/blank_profile.jpg';

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
font-size: 32px;
font-weight: 600;
line-height: 40px;
color: #4F4F4F;
`

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
    color: #8A8A8A;
`;

const InfoInput = styled.input`
padding: 11px;
margin-top: 4px;
font-family: "KumbhSans-Regular";
font-size: 14px;
font-weight: 500;
color: #4F4F4F;
border: 0.5px solid #A7A7A7;
border-radius: 4px;
`;


const NumberInput = styled.input`
padding: 11px;
margin-top: 4px;
font-family: "KumbhSans-Regular";
font-size: 14px;
font-weight: 500;
color: #4F4F4F;
border: 0.5px solid #A7A7A7;
border-radius: 4px;
::-webkit-inner-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
  }
  ::-webkit-outer-spin-button{
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
color: #4F4F4F;
border: 0.5px solid #A7A7A7;
border-radius: 4px;
resize: none;

`

const InfoSelect = styled.select`
height: 42px;
font-family: 'KumbhSans-Regular';
font-size: 14px;
font-weight: 500;
line-height: 17px;
margin-top: 32px;
padding: 11px;
border: 0.5px solid #A7A7A7;
border-radius: 4px;

-webkit-appearance:none; /* 크롬 화살표 없애기 */
-moz-appearance:none; /* 파이어폭스 화살표 없애기 */
appearance:none; /* 화살표 없애기 */
`;


const ProfileImgDiv = styled.div`
margin-top: 55px;  
 position: relative; 
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const ProfileImg = styled.img`
 width: 18vw;
 height: 18vw;
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
    isVaild: boolean
}

const AddTeacherButton = styled.button<AddTeacherButtonProps>`
width: 131px;
padding: 12px 23px;
font-family: 'KumbhSans-SemiBold';
font-size: 14px;
font-weight: 600;
color: white;
background-color:${(props) => props.isVaild ? '#509CDB' : '#E9E9E9'};
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
    teacher: any,
    submitEditTeacher: (name: string, teacherClass: string | undefined, gender: string | undefined, subject:string | undefined, phoneNumber: string | undefined, email: string | undefined, identificationNumber: string | undefined, password: string | undefined, about: string | undefined, profileImageUrl: string | undefined) => void;
    closeModal: () => void;
}


const EditTeacherModal = ({teacher, submitEditTeacher, closeModal}: props) => {
    const [isVaild, setIsVaild] = useState(false);
    const [name, setName] = useState<string>(teacher.name);
    const [phoneNumber, setPhoneNumber] = useState(teacher.phoneNumber);
    const [email, setEmail] = useState(teacher.email);
    const [identificationNumber, setIdentificationNumber] = useState(teacher.identificationNumber);
    const [password, setPassword] = useState(teacher.password);
    const [about, setAbout] = useState(teacher.about);

    const [teacherClass, setTeacherClass] = useState(teacher.class);
    const [gender, setGender] = useState(teacher.gender);
    const [subject, setSubject] = useState(teacher.subject);
    
    const imgInputRef = useRef<HTMLInputElement | null>(null);
    const [profileImageSrc, setProfileImageSrc]: any = useState(teacher.profileImage);

    const dispatch = useDispatch();

    useEffect(() => {
        if(name.length > 0 && phoneNumber.length > 0 && email.length > 0 && identificationNumber.length > 0 && password.length > 0 &&teacherClass.length > 0 && gender.length > 0 && subject.length > 0) {
            setIsVaild(true);
        } else {
            setIsVaild(false);
        }

    }, [name, phoneNumber, email, identificationNumber, password, gender, subject, teacherClass])

    

    const onUploadProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) {
            return
        } 

        if(e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
    
            return new Promise<void>((resolve) => {
                reader.onload = () => {
                    setProfileImageSrc(reader.result || null);
                    resolve();
                }
            })
        }


    }

    const onClickProfileImg = () => {
        if(!imgInputRef.current) {
            return
        }

        imgInputRef.current.click();
    }

    const onClickEditTeacher = (e: any) => {
        e.preventDefault();

        if(isVaild) {
            dispatch(setEditModal(false))
            submitEditTeacher(name, teacherClass, gender, subject, phoneNumber, email, identificationNumber, password, about, profileImageSrc); 
        } 
    }

    const selectClass = (e: any) => {
        setTeacherClass(e.target.value);
    }

    const selectGender = (e: any) => {
        setGender(e.target.value);
    }

    const selectSubject = (e: any) => {
        setSubject(e.target.value)
    }

    const changeName = (e: any) => {
        setName(e.target.value)
    }

    const changePhoneNumber = (e: any) => {
        setPhoneNumber(e.target.value);
    }

    const changeEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const changeIdentificationNumber = (e: any) => {
        setIdentificationNumber(e.target.value);
    }

    const changePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const changeAbout = (e: any) => {
        setAbout(e.target.value);
    }

    return (
        <Container> 
            <AddTeacherForm onSubmit={(e: React.FormEvent<HTMLFormElement>) => onClickEditTeacher(e)}>
            <TitleDiv>
                Edit Teacher
            </TitleDiv>
            <div
            style={{display: 'flex', background: 'white'}}>
                <LeftForm>
                    <InfoLabel>Full name</InfoLabel>
                    <InfoInput
                    value={name}
                    onChange={changeName}
                    />
                    <span
                    style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <InfoSelect
                        onChange={selectClass}
                        style={{flex: 1}}
                        defaultValue={teacherClass}>
                            <option disabled hidden>Class</option>
                            <option key={1} value={1}>1</option>
                            <option key={2} value={2}>2</option>
                            <option key={3} value={3}>3</option>
                            <option key={4} value={4}>4</option>
                            <option key={5} value={5}>5</option>
                        </InfoSelect>
                        <InfoSelect
                        onChange={selectGender}
                        defaultValue={gender}
                        style={{marginLeft: "19px", flex: 1}}>
                            <option disabled hidden>Gender</option>
                            <option key={"Male"} value={"Male"}>Male</option>
                            <option key={"Female"} value={"Female"}>Female</option>
                        </InfoSelect>
                    </span>
                    <InfoSelect
                    onChange={selectSubject}
                    defaultValue={subject}>
                        <option disabled hidden>Subject</option>
                        <option key={"English"} value={"English"}>English</option>
                        <option key={"Math"} value={"Math"}>Math</option>
                        <option key={"French"} value={"French"}>French</option>
                        <option key={"Chemistry"} value={"Chemistry"}>Chemistry</option>
                        <option key={"Social studies"} value={"Social studies"}>Social studies</option>
                        <option key={"Home economics"} value={"Home economics"}>Home economics</option>
                    </InfoSelect>
                    <ProfileImgDiv>
                        <ProfileImg
                        onClick={() => onClickProfileImg()}
                        src={profileImageSrc}/>                    
                        <ProfileImgInput
                        ref={imgInputRef}
                        onChange={onUploadProfileImage}
                        type={"file"}
                        accept={"image/*"}/>
                    </ProfileImgDiv>
                </LeftForm>
                <RightForm>
                    <InfoLabel>Phone number</InfoLabel>
                    <NumberInput
                    onKeyDown={(e) => ["e", "E", "+"].includes(e.key) && e.preventDefault()}
                    type={"number"}
                    value={phoneNumber}
                    onChange={changePhoneNumber}/>
                    <InfoLabel>Email address</InfoLabel>
                    <InfoInput
                    value={email}
                    onChange={changeEmail}/>
                    <InfoLabel>Identification number</InfoLabel>
                    <InfoInput
                    value={identificationNumber}
                    onChange={changeIdentificationNumber}/>
                    <InfoLabel>Password</InfoLabel>
                    <InfoInput
                    value={password}
                    onChange={changePassword}/>
                    <InfoLabel>About</InfoLabel>
                    <AboutTextarea
                    value={about}
                    onChange={changeAbout}
                    rows={6}/>
                    <AddTeacherButtonDiv>
                    <AddTeacherButton
                    isVaild={isVaild}
                    type={"submit"}>Add Teacher</AddTeacherButton>
                    </AddTeacherButtonDiv>
                </RightForm>
            </div>
            </AddTeacherForm>
            <CloseIcon
            onClick={() => closeModal()}
            src={CloseIconPNG}/>
        </Container>
    )
}

export default EditTeacherModal;