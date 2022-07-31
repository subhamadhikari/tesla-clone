import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section(props) {
  return (
    <Wrap bgImage={props.backgroungimage}>

        <Fade bottom>
          <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </ItemText>
        </Fade>



      <Buttons>

        <Fade bottom>
        <ButtonGroup>
        <LeftButton>
          {props.leftBtnText}
        </LeftButton>
        {
          props.rightBtnText &&         
          <RightButton>
          {props.rightBtnText}
        </RightButton>
        }
      </ButtonGroup>
        </Fade>



      <DownArrow src="/images/down-arrow.svg">
      </DownArrow>
      </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    z-index:-1;
    width:100vw;
    height:100vh;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    // background-image : url('images/model-s.jpg')
    background-image : ${props => `url("/images/${props.bgImage}")`}

    
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`


const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;

    @media (max-width:768px){
      flex-direction:column;f
    }

`

const LeftButton = styled.div`
      background-color:rgba(23,26,32,0.8);
      height:40px;
      width:226px;
      color:white;

      display:flex;
      justify-content:center;
      align-items:center;

      border-radius:100px;
      opacity:0.85;
      text-transform:uppercase;
      font-size:12px;
      cursor:pointer;
      margin:8px;
      margin-down:0px;
`

const RightButton = styled(LeftButton) // inherits css of left button
`
      background-color:white;
      opacity:0.65;
      color:black;
`

const DownArrow = styled.img`
      height:40px;
      overflow-x: hidden;
      animation:animateDown infinite 1.5s;
`
const Buttons = styled.div`
      display:flex;
      flex-direction:column;
`