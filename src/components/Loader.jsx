import React from 'react';
import styled, { keyframes } from 'styled-components'

const rotate = keyframes` 
  from{
    transform:translate(-50%,-50%) rotate(0deg);
  }
  to{
    transform:translate(-50%,-50%) rotate(360deg);
  }
`


const Loading = styled.div` 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  z-index: 10; 
  border: 3px solid transparent;
  border-color: #0079ff #00deff #00deff #00deff ;
  animation: ${rotate} 300ms infinite linear;
  box-shadow: 0 0 10px hsla(205,100%,50%,0.5), 0 0 10px hsla(205,100%,50%,0.5)inset;
`


export default function Loader() {

  return (
    <Loading>

    </Loading>
  )
}
