import React from 'react';
import styled from 'styled-components';
import {animated, useSpring} from '@react-spring/web';

const Container = styled.div`
margin-top: 30px;
width: 47%;
border-radius: 12px;
display: flex;
flex-direction: column;
`;

const TitleDiv = styled.div`
font-size: 13px;
font-weight: 400;
color: #282828;
`;

const RatioContainer = styled.div`
position: relative;
margin-top: 8px;
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
`;

const FemaleRatioSpan = styled(animated.span)`
height: 1.5rem;
background-color: #FF5F5F;
border-radius: 5px 0px 0px 5px;
`

const MaleRatioSpan = styled(animated.span)`
height: 1.5rem;
background-color: #5C8AFF;
border-radius: 0px 5px 5px 0px;
`;

const GenderTextDiv = styled.div`
margin-top: 7px;
display: flex;
flex-direction: row;
justify-content: space-between;  
`;

const GenderText = styled.span`
font-size: 13px;
font-weight: 400;
color: #282828;
`;

interface props {
    maleCount: number,
    femaleCount: number,
}



const GenderRatioGraph = ({maleCount, femaleCount}: props) => {
    console.log("maleCount", maleCount);
    console.log("femaleCount", femaleCount);

    const femaleSprings = useSpring(({
        from: {width: '50%'},
        to: {width: `${(femaleCount/(maleCount+femaleCount) * 100)}%`},
        config: {
            mass: 10,
            friction: 50,
            tension: 600,
        }
    }))

    const maleSprings = useSpring(({
        from: {width: '50%'},
        to: {width: `${(maleCount/(maleCount+femaleCount) * 100)}%`},
        config: {
            mass: 10,
            friction: 50,
            tension: 600,
        }
    }))


    
    return (
        <Container>
            <RatioContainer>
            <FemaleRatioSpan
            style={{
                ...femaleSprings,
            }}/>
            <MaleRatioSpan
            style={{
                ...maleSprings,
            }}
            />
            </RatioContainer>
            <GenderTextDiv>
                <GenderText>
                    Female{` ${Math.round(femaleCount/(maleCount+femaleCount) * 100)}%`}
                </GenderText>
                <GenderText>
                    Male{` ${Math.round(maleCount/(maleCount+femaleCount) * 100)}%`}
                </GenderText>
            </GenderTextDiv>
        </Container>
    )

}

export default GenderRatioGraph;