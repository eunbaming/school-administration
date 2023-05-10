import React, { useEffect } from 'react';
import styled from 'styled-components';
import {animated, useSpring} from '@react-spring/web';

const Container = styled.div`
position: relative;
margin-top: 30px;
width: 90%;
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

interface maleProps {
    readonly femaleCount: number
}

interface femaleProps {
    readonly maleCount: number;
}

const FemaleRatioSpan = styled(animated.span)<femaleProps>`
position: absolute;
left: 0;
height: 1.7rem;
background-color: #ffdbcc;
border-radius: 5px 0px 0px 5px;
border-top-right-radius: ${props => props.maleCount === 0 ? '5px' : '0px'};
border-bottom-right-radius: ${props => props.maleCount === 0 ? '5px' : '0px'};
`

const MaleRatioSpan = styled(animated.span)<maleProps>`
position: absolute;
right: 0;
height: 1.7rem;
background-color: #abdee6;
border-radius: 0px 5px 5px 0px;
border-top-left-radius: ${props => props.femaleCount === 0 ? '5px' : '0px'};
border-bottom-left-radius: ${props => props.femaleCount === 0 ? '5px' : '0px'};
`;

const GenderTextDiv = styled.div`
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;  
`;

const GenderText = styled.span`
font-size: 14px;
font-weight: 500;
color: #282828;
`;

interface props {
    maleCount: number,
    femaleCount: number,
}



const GenderRatioGraph = ({maleCount, femaleCount}: props) => {

    const config = {
        mass: 4,
        friction: 50,
        tension: 300,
    }

    const [femaleSprings, femaleApi] = useSpring(() => ({
        from: {width: '50%'},
        config
    }))

    const [maleSprings, api] = useSpring(() => ({
        from: {width: '50%'},
        config
    }))

    useEffect(() => {

    console.log("maleCount", maleCount);
    console.log("femaleCount", femaleCount);

        
    if(femaleCount > 0) {
        femaleApi.start({
            from: {width: '50%'},
            to: {
                width:`${(femaleCount/(maleCount+femaleCount) * 100)}%`
            }
        })
    }

    if(maleCount > 0) {
        api.start({
            from: {width: '50%'},
            to: {
                width: `${(maleCount/(maleCount+femaleCount) * 100)}%`
            }
        })

    }

    }, [maleCount, femaleCount, femaleApi, api])


    
    return (
        <Container>
            <RatioContainer>
            <FemaleRatioSpan
            maleCount={maleCount}
            style={{
                ...femaleSprings,
            }}/>
            <MaleRatioSpan
            femaleCount={femaleCount}
            style={{
                ...maleSprings,
            }}
            />
            </RatioContainer>
            <GenderTextDiv>
                <GenderText>
                    여성
                    {femaleCount > 0 &&` ${Math.round(femaleCount/(maleCount+femaleCount) * 100)}%`}
                </GenderText>
                <GenderText>
                    남성
                    {maleCount > 0 && ` ${Math.round(maleCount/(maleCount+femaleCount) * 100)}%`}
                </GenderText>
            </GenderTextDiv>
        </Container>
    )

}

export default GenderRatioGraph;