import styled, {keyframes} from "styled-components";

// const flashIt = keyframes`
//   from {
//     transform : translate(-50%, -50%) scale(1);
//     opacity : 1;
//   }

//   to {
//     transform : translate(-50%, -50%) scale(8);
//     opacity : 0;
//   }
// `;

// const Flash = styled.h1`
//  font-size : 8em;
//  color : ${({theme}) => theme.cardFg};
//  position : absolute;
//  top : 50%;
//  left : 50%;
//  transform : translate(-50%, -50%);
//  z-index: 100;
//  animation ${flashIt} 1200ms 1 ease;
// `

// const Canvas = styled.canvas`
//   background : white;
// `

const Main = styled.div`
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
  background-color : ${({theme}) => theme.headerBg};
  padding : 1rem;
  border-radius: 4px;
  display : flex;
  align-items: center;
  justify-content : center;
  h1{
    display : block;
    flex : auto;
  }
  div{
    width: 100px;
    height : 100%;
    display : flex;
    align-items: center;
    justify-content : center;
    img{
      padding : 0.2rem;
      background-color : rgba(40,40,40,0.2);
      border-radius : 50%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    div{
      align-items: center;
      ${'' /* justify-content: flex-end; */}
      width : 100%;
      margin-top : 0.2rem;
      img{
        height: 20px;
        width : 20px;
      }
    }
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

const ThemeButton = styled.button`
  font-size : 2em;
  background-color : transparent;
`

const Icon = styled.img`
  height : 28px;
  width : 28px;
`

export {Main, Input, Header, Container, ThemeButton, Icon, ToggleSwitch}