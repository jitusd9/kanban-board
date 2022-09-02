import styled,{ keyframes } from "styled-components";

const glow = keyframes`
  from {
    box-shadow : 0 0 0 2px hsl(60deg,100%,50%)
  }

  to {
    box-shadow : 0 0 0 2px hsl(260deg,100%,50%)
  }
`;

const Box = styled.div`
  position : relative;
  min-height : 60px;
  color : black;
  background-color: ${({theme}) => theme.cardBg};
  margin-block: 0.4rem; 
  box-shadow: 0px 4px 4px #50626f29;
  border-radius : 4px;
  border : 1px solid ${({theme}) => theme.borderColor};
  transition : all 0.2s;
  &:hover{
    ${'' /* animation : ${glow} 5s linear alternate infinite;  */}
  }
`

const Header = styled.div`
  position : relative;
  color : ${({theme}) => theme.titleFg};
  background-color : ${({theme}) => theme.titleBg};
  text-align: right;
  padding : 0.1rem 0.2rem;
  border-bottom : 1px solid ${({theme}) => theme.borderColor};
  border-radius : 4px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`

const Delete = styled.button`
  position: relative;
  background-color : #ff7d7d;
  padding: 0;
  width : 16px;
  height : 16px;
  color : white;
  font-weight : bold;
  border-radius: 50%;
  filter : none;
`

const Content = styled.div`
  position: relative;
  padding : 0.4rem;
  text-align: left;
  color : ${({theme}) => theme.cardFg};
  background-color : ${({theme}) => theme.cardBg};

  p{
    margin-block : 0.5rem;
    ${'' /* they are literally just alternate names for each other. Some browsers support one and not the other */}
    overflow-wrap: break-word;
    word-wrap: break-word;

    ${'' /* add a hyphen where it breaks if the browser supports it */}
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hypens : auto;
  }

`

const Footer = styled(Header)`
  text-align : left;
  border-radius : 4px;
  border-bottom : none;
  border-top : 1px solid ${({theme}) => theme.borderColor};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`

const Button = styled.button`
  margin : 0.2rem;
  padding: 0.2rem 0.4rem;
  border-radius : 4px;
  color : ${({theme}) => theme.cardFg};
  background-color : transparent;
  border : 1px solid ${({theme}) => theme.borderColor};
  &:hover{
    ${'' /* color : #232425;
    background-color: #f9f9f9; */}
    color : ${({theme}) => theme.hoverFg};
    background-color : ${({theme}) => theme.hoverBg};
  }
`

const YesNoBox = styled.div` 
  position : absolute;
  top : 50%;
  left : 50%;
  transform : translate(-50%,-50%);
  padding : 0.5rem;
  color :  #f9f9f9;
  background-color :  #1d242a;
  border-radius : 4px;
  z-index:1;
  button{
    color : #e3e3e3;
    border-color : #595959;
  }

`

const Dialog = styled.div`
  max-width : 100%;
  height :auto;
  position : absolute;
  bottom : 100%;
  right : 0%;
  transform : translate(0%,0%);
  z-index : 1;
  color :  #f9f9f9;
  background-color :  #1d242a;
  padding : 0.5rem;
  border-radius : 4px;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

export {
  Box,
  Header,
  Delete,
  Content,
  Footer,
  Button,
  Dialog,
  YesNoBox
}