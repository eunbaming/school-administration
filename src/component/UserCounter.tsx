import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import TeachersPNG from '../assets/teacher_image.png';


const Container = styled.div`
width: 47%;
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
opacity: 0.9;
  width: 3.5rem;
  height: 3.5rem;  
`;

const CountText = styled.span`
width: 23px;
font-size: 40px;
font-weight: 700;
color: #242424;
display: flex;
`;

const PeopleText = styled.span`
padding-right: 5px;
font-size: 14px;
font-weight: 400;
color: #282828;
`;

interface props {
    count: number;
}

const UserCounter = ({count}: props) => {

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

    const unitsObj = document.getElementById("unitsValue");
    const tensObj = document.getElementById("tensValue");

    animateValue(unitsObj, tensObj, 0, count, 1200);

    
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
            src={TeachersPNG}/>
            </ImageBackground>
            <div>
            <div
            style={{display: 'flex', flexDirection: 'row'}}>
            <CountText id="tensValue"></CountText>
            <CountText id="unitsValue">0</CountText>
            </div>
            <PeopleText>
                People
            </PeopleText>
            </div>
            </div>
        </Container>

    )
}

export default UserCounter;