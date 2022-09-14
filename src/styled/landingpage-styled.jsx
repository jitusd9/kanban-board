import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100vh;
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
    margin : 0;
    background: -webkit-linear-gradient(90deg, #222, #999);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

const updown = keyframes`
  from{
    transform: translate3d(0,-10px,0) rotate(-3deg);
  }
  to{
    transform: translate3d(0,10px,0) rotate(3deg);
  }
`

const TitleBar = styled.div`
  position: relative;
  height: 2rem;
  background-color: #505364;
  display: flex;
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

const Showcase = styled.div`

  width: 100%;
  margin-inline: auto;
  color : ${({theme}) => theme.headerFg};
  display: flex;
  justify-content: center;
  div{
    img{
      max-width: 100%;
      height: auto;
      box-shadow: 0 10px 10px rgba(0,0,0,0.4);
    }
  }
`

const Cta = styled.button`
  width: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color : transparent;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  a{
    border-radius: 4px;
    padding: 0.5rem 1.5rem;
    font-size: 2rem;
    text-shadow: 0 2px 0px rgba(0,0,0,0.5);
    font-weight: bold;
    color: #f9f9f9;
    background-color: slateblue;
      &:hover{
      color: slateblue;
      background-color: #f9f9f9;
      text-shadow:none;
    }
  }
  
`

export { Container, Welcome, Showcase, Cta, TitleBar, Tab }