import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  perspective: 1000px;
  transform-style: preserve-3d;
`

export const Welcome = styled.div`
  position: relative;
  width: 90%;
  margin-top: 1rem;
  margin-inline: auto;
  padding-block: 1rem;
  svg{
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 5rem;
    width: auto;
  }
  h1{
    color : ${({theme}) => theme.headerFg};
    font-family: 'Righteous', sans-serif;
    font-size: 4em; 
    text-transform: capitalize;
  }
  p{
    color : ${({theme}) => theme.headerFg};
    font-size: 1.1rem;
    font-family: Cursive;
    padding-block: 1rem;
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

export const Monitor = styled.div`
  position: relative;
  border: 1.2rem solid black;
  border-radius: 10px;
  max-width: 720px;
  height: auto;
  margin-inline: auto;
  margin-top: 1rem;
  color : ${({theme}) => theme.headerFg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow:0 0.5px 0 white,  ${({theme}) => theme.monitorShade};
  transform: rotateX(10deg) rotateY(15deg) rotateZ(-5deg);
  img{
    position: relative;
    z-index: -1;
  }

`

export const Links = styled.div` 
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding : 0.5rem;
`

export const Cta = styled.button`
  position : relative;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: transparent;
  border-radius: 4px;
  border: none;
  background: linear-gradient(45deg, #7652fb, #12fdf6);
  box-shadow: 0 10px 10px -5px rgba(0,0,0,0.5);
  transition: all 0.3s;
  &:hover{
    color : #f9f9f9;
    box-shadow: 0 5px 10px -5px rgba(0,0,0,0.8);
  }
`
