import React from 'react';
import styled, { keyframes } from 'styled-components'

const rotate = keyframes` 
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`


const Loading = styled.div` 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  background-color: white;
  background: linear-gradient(45deg,#08b17a,hsl(212deg 92% 20%));

  box-shadow: 0 0 4rem rgba(0,0,0,0.3);
  z-index: 10; 
  display: flex;
  align-items: center;
  justify-content: center;
  div{
    height: 8rem;
    width: 8rem;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 2rem hsla(205,100%,50%,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.3rem solid transparent;
    border-color: #0079ff #00deff #00deff #00deff ;
    animation: ${rotate} 500ms infinite linear;
  }
  h2{
    z-index: 1;
    color: #008eff;
    position: absolute;
    font-size: 1.2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

`


export default function Loader() {


  return (
    <Loading>
      <div>
      </div>
      <h2>Loading...</h2>
    </Loading>
  )
}