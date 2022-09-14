import styled, {keyframes} from "styled-components";


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
  top:0;
  left: 50%;
  transform: translate(-50%,0%);
  list-style: none;
  max-width : 500px;
  min-height: 50px;
  margin-inline: auto;
  margin-block: 0;
  display: flex;
  align-items: strech;
  background: linear-gradient(#222 80%, #444);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom: 1px solid #aaa;
  overflow: hidden;
  z-index: 1;
  li{
    flex: 1;
    display : flex;
    align-items: strech;
    padding-inline: 1rem;
    &:hover{
      background-color: #333;
      a{
        color: #1ceea3;
      }
    }
    a{
      color: #a485f9;
      width : 100%;
      display : flex;
      align-items: center;
      justify-content: center;
    }
  }

`

const ThemeButton = styled.li`
  cursor: pointer;
  align-items: center;
  justify-content: center;
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


const Icon = styled.img`
  height : 28px;
  width : 28px;
`

export {Main, Input, Header, Container, ThemeButton, Icon, ToggleSwitch, Navpanel}