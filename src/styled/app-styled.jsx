import styled, { keyframes } from "styled-components";

const Main = styled.div`
  margin-top: 2rem;
  width: 100%;
`
const Input = styled.input`
  font-size : 2.5em;
  line-height : 1.1;
  font-weight : bold;
  text-align : center;
  background-color : transparent;
  border : none;
`

const Header = styled.div`
  color : ${({theme}) => theme.headerFg};
  ${'' /* background-color : ${({theme}) => theme.headerBg}; */}
  padding : 1rem;
  border-radius: 4px;
  display: inline-block;
  h1{
    display : block;
  }

`

const Navpanel = styled.ul`
  position: fixed;
  top:0%;
  left: 50%;
  transform: translate(-50%,0%);
  list-style: none;
  max-width : calc(100% - 0.5rem);
  min-height: 50px;
  margin-inline: auto;
  margin-block: 0;
  display: flex;
  align-items: strech;
  ${'' /* background-color: ${({theme}) => theme.navbarBg}; */}
  background: linear-gradient(45deg,#08b17a,hsl(212deg 92% 20%));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  z-index: 1;
  border: 1px solid #aaa;
  border-top: none;
  box-shadow: 0 3px 9px rgba(0,0,0,0.6);
  a{
      font-weight: bold;
      color: #f9f9f9;
      width : 100%;
      display : flex;
      align-items: center;
      justify-content: center;
      text-shadow: 0 2px 2px rgba(0,0,0,0.2);
      padding-inline: 0.5rem;
    }
  li{
    flex: 1;
    display : flex;
    align-items: strech;
    &:hover{
      background-color: white;
      a{
        color: black;
      }
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0;
    padding: 0;
  }
`

export const MobileNav = styled.div`
  width: 30px;
  height: 60px;
  border-bottom-left-radius: 4px;
  position: fixed;
  top: 50%;
  left: 0%;
  z-index: 1;
  background: linear-gradient(270deg,#08b17a,hsl(212deg 92% 20%));
  transform: translate(0%,-50%);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 2px solid #aaa;
  
  @media (max-width: 768px) {
    display: flex;
  }

`

const shake = keyframes` 
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(90deg);
  }
`

const ThemeButton = styled.button`
  display: ${props => props.mobile ? 'none' : 'flex'};
  cursor: pointer;
  flex-direction : column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  flex: 1;
  align-items: strech;
  padding: 0.4rem;
  transition: none;
  width: 50px;
  height: 50px;
  div{
    position: relative;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
  }
  div:nth-child(2){
    margin-block: 4px;
    width: 70%;
    margin-right: 30%;
  }
  div:nth-child(3){
    width: 80%;
    margin-right: 20%;
  }
  @media (max-width: 768px) {
    display: flex;
  }

`


const ToggleSwitch = styled.div`
  position : relative;
  display : flex;
  overflow : hidden;
  input{
    position : absolute;
    clip: rect(0,0,0,0);
    height : 1px;
    width : 1px;
    border: 0;
    overflow : hidden;
    &:checked + label{
      background-color: #fff;
	    box-shadow: none;
    }
  }

  label{
    background-color: #e4e4e4;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1;
    text-align: center;
    padding: 0.3rem 0.6rem;
    margin-right: -1px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
    &:hover{
      cursor: pointer;
    }
    &:first-of-type{
      border-radius: 4px 0 0 4px;
    }
    &:last-of-type{
      border-radius: 0 4px 4px 0;
    }
  }
`

const Container = styled.div`
  position : relative;
  display: flex;
  flex-wrap : wrap;
  justify-content: center;
  width : 100%;
  overflow-x : auto;
`

const SVGIcon = styled.img` 
  position: absolute;
  height: 20px;
  width: auto;
  transition: all 0.3s cubic-bezier(0.77, 0.75, 0.47, 1.31);
  transform: translateY(${props => props.theme});
  &:hover{
    transform: translateY(${props => props.theme}) rotate(360deg);
  }
`

const Icon = styled.img`
  height : 28px;
  width : 28px;
`

export {Main, SVGIcon, Input, Header, Container, ThemeButton, Icon, ToggleSwitch, Navpanel}