import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

const Welcome = styled.div`
  width: 90%;
  margin-top: 40px;
  margin-inline: auto;
  color : ${({theme}) => theme.headerFg};
  h1{
    font-family: 'Righteous', sans-serif;
    font-size: 4em; 
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    h1{
      font-size: 3em;
    }
  }

  @media (max-width: 480px) {
    h1{
      font-size: 2em;
    }
  }

`

const Monitor = styled.div`
  position: relative;
  border: 1.2rem solid black;
  border-radius: 10px;
  max-width: 800px;
  height: auto;
  margin-inline: auto;
  color : ${({theme}) => theme.headerFg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow:0 0.5px 0 white, 0 0.5px 1px white inset;
  img{
    position: relative;
    z-index: -1;
  }

  &::after{
    content: "";
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 100%);
    height: 80px;
    width: 100px;
    background-color: black;
    z-index: -1;
  }

  &::before{
    content: "";
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translate(-50%, 100%);
    height: 20px;
    width: 300px;
    background-color: black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
`

export const Links = styled.div` 
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding : 0.5rem;
`

const Cta = styled.button`
  position : relative;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: transparent;
  border-radius: 4px;
  border: none;
  background: linear-gradient(45deg, #7652fb, #12fdf6);
  box-shadow: 0 10px 10px -5px rgba(0,0,0,0.5);
  text-shadow: 0 4px 4px rgba(0,0,0,0.3);
  &:hover{
    background: linear-gradient(45deg, #7652fb, #12fdf6);
  }
`

const TitleBar = styled.div`
  position: relative;
  height: 2rem;
  background-color: #505364;
  display: flex;
  z-index: -1;
  div:nth-child(1){
    margin-left: 4px;
    background : linear-gradient(90deg, #ff87aa, #ffa7a5);
  }

`

const Tab = styled.div`
  position: relative;
  background-color: #f9f9f9;
  height : 80%;
  bottom: -20%;
  margin-inline: 2px;
  padding-inline: 0.5rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color : black;
  background-color: #aaa;
  
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }

`


export { Container, Welcome, Cta, TitleBar, Tab, Monitor }