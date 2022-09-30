import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

function Section(props) {
        return (
                <Wrap bgImg={props.backgroundImg}>
                        <Fade bottom>
                                <ItemText>
                                        <h1>{props.title}</h1>
                                        <p> {props.description}</p>
                                </ItemText>
                        </Fade>

                        <Buttons>
                        <Fade bottom>
                                <ButtonGroup>
                                        <LeftButton>
                                                {props.leftButtonText}
                                        </LeftButton>
                                        {props.rightButtonText && <RightButton>
                                                {props.rightButtonText}
                                        </RightButton>}

                                </ButtonGroup>
                        </Fade>
                                <DownArrow src="/images/images/down-arrow.svg">

                                </DownArrow>
                        </Buttons>
                </Wrap>
        )
}

export default Section

const Wrap = styled.div`
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: ${props => `url("/images/images/${props.bgImg}")`};       
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
`

const ItemText = styled.div`
        padding-top: 17vh;
        text-align: center;
`
const Buttons = styled.div`
`

const ButtonGroup = styled.div`
        display: flex;
        margin-bottom: 30px;
        @media (max-width: 768px){
            flex-direction: column;
        }
`

const LeftButton = styled.div`
        background-color: rgba(23,26,32,0.8);
        height: 40px;
        width:256px;
        color: white;
        display: flex;
        padding-top: 10px;
        justify-content: center;
        align-itmes: center;
        border-radius: 5px;
        opacity: 0.85;
        text-transform:  uppercase;
        font-size: 12px;
        cursor: pointer;
        font-weight: 700;
        margin: 8px;
`

const RightButton = styled(LeftButton)`
        background-color: white;
        color: black;
    

`
const DownArrow = styled.img`
        margin-top:20px;
        height: 40px;
        overflow-x: hidden;
        animation: animateDown infinite 1.5s;
`