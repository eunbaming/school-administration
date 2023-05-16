import React from 'react';
import styled from 'styled-components';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import {Doughnut} from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const Container = styled.div`
margin-top: 20px;
width: 90%;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;

const CircleGraph = styled.div`
width: 15vw;
height: 15vw;
border-radius: 200px;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
`;

const InnerCircle = styled.div`
width: 12vw;
height: 12vw;
border-radius: 200px;
background-color: white;
`;

const DataDiv = styled.div`
width: 100%;
margin-top: 10px;
display: flex;
flex-direction: row;
justify-content: space-around;
`;


const DataText = styled.span`
margin-left: 7px;
font-size: 14px;
font-weight: 500;
color: #282828;
`;

const DataColorLabel = styled.span`
width: 14px;
height: 14px;
`;

const DataItem = styled.span`
margin-top: 5px;
display: flex;
align-items: center;
`;

interface props {
    korean: number,
    english: number,
    math: number,
    society: number,
    science: number,
    entire: number,
}

const SubjectRatioCircleGraph = ({korean = 0, english = 0, math = 0, society = 0, science = 0, entire}: props) => {

    const data = {
        labels: [],
        datasets: [{
            data: [korean, english, math, society, science],
            backgroundColor: ['#9fd6cd', '#f4e3dc', '#ef9a9a', '#ede6c5', '#f4d284'],
            borderColor: ['#9fd6cd', '#f4e3dc', '#ef9a9a', '#ede6c5', '#f4d284'],
            cutout: '75%',
        }]
    }

    const options = {
        events: [],
        animation: {
            duration: 2000,
        }
    }


    return (
        <Container>
                <Doughnut
                style={{width: '95%', height: '95%'}}
                data={data}
                options={options}
                updateMode={"resize"}>
                </Doughnut>
                <DataDiv>
                    <span
                    style={{display: 'flex', flexDirection: 'column'}}>
                    <DataItem>
                    <DataColorLabel
                        style={{backgroundColor: "#9fd6cd"}}
                    ></DataColorLabel>
                    <DataText>
                        국어{` ${Math.round(korean/entire * 100)}%`}
                    </DataText>
                    </DataItem>
                    <DataItem>
                        <DataColorLabel
                        style={{backgroundColor: "#f4e3dc"}}/>
                        <DataText>
                        영어{` ${Math.round(english/entire * 100)}%`}
                        </DataText>
                    </DataItem>
                    <DataItem>
                        <DataColorLabel
                        style={{backgroundColor: "#ef9a9a"}}/>
                        <DataText>
                            수학{` ${Math.round(math/entire * 100)}%`}
                        </DataText>
                    </DataItem>
                    </span>
                    <span
                    style={{display: 'flex', flexDirection: 'column'}}>
                    <DataItem>
                        <DataColorLabel
                        style={{backgroundColor: "#ede6c5"}}/>
                    <DataText>
                        사회{` ${Math.round(society/entire * 100)}%`}
                    </DataText>
                    </DataItem>
                    <DataItem>
                        <DataColorLabel
                        style={{backgroundColor: "#f4d284"}}/>
                        <DataText>
                            과학{` ${Math.round(science/entire * 100)}%`}
                    </DataText>
                    </DataItem>
                    </span>
                </DataDiv>
                
        </Container>
    )
}

export default SubjectRatioCircleGraph;