import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import TeachersPNG from '../assets/teacher_icon.png';
import StudentPNG from '../assets/student_icon.png';


const Container = styled.div`
width: 90%;
margin-top: 30px;
`;

const TitleDiv = styled.div`
font-size: 13px;
font-weight: 400;
color: #282828;
`;



const ImageBackground = styled.span`
width: 4.5rem;
height: 4.5rem;
border-radius: 100px;
background-color: #EFF3FA;
display: flex;
align-items: center;
justify-content: center;
`;

const TeacherImage = styled.img`
opacity: 0.8;
  width: 3.3rem;
  height: 3.3rem;  
`;

const CountText = styled.span`
width: 23px;
font-size: 40px;
font-weight: 700;
color: #242424;
display: flex;
`;

const PeopleText = styled.span`
font-size: 16px;
font-weight: 500;
color: #282828;
text-align: right;
`;

interface props {
    type: string;
    count: number;
}

const UserCounter = ({type, count}: props) => {

    function animateValue(unitsObj: any, tensObj: any, start: any, end: any, duration: any) {
        let startTimestamp: any = null;
        const step = (timestamp: any) => {
            if(!startTimestamp) startTimestamp = timestamp;
            
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            if(Math.floor(progress * (end - start) + start).toString().length === 1) {
                if(unitsObj) {
                    unitsObj.innerHTML = Math.floor(progress * (end - start) + start).toString()
                }
            } else if(Math.floor(progress * (end - start) + start).toString().length === 2) {
                if(unitsObj && tensObj) {
                    unitsObj.innerHTML = Math.floor(progress * (end - start) + start).toString()[1]
                    tensObj.innerHTML = Math.floor(progress * (end - start) + start).toString()[0]
                }
            }

            if(progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    const unitsObj = document.getElementById(`${type}unitsValue`);
    const tensObj = document.getElementById(`${type}tensValue`);

    animateValue(unitsObj, tensObj, 0, count, count * 80);

    
    return (
        <Container>
            <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'}}>
            <ImageBackground>
            <TeacherImage
            src={type === 'student' ? StudentPNG : TeachersPNG}/>
            </ImageBackground>
            <div
            style={{textAlign: 'right', paddingRight: 10}}>
            <div
            style={{display: 'flex', flexDirection: 'row'}}>
            <CountText id={`${type}tensValue`}></CountText>
            <CountText id={`${type}unitsValue`}>0</CountText>
            </div>
            <PeopleText>
                명
            </PeopleText>
            </div>
            </div>
        </Container>

    )
}

export default UserCounter;