import styled,{ keyframes } from "styled-components";

const glow = keyframes`
  from {
    background-color: hsl(180deg,10%,10%);
  }

  to {
    background-color: hsl(300deg,10%,10%);
  }
`;

const Header = styled.div`
  position : relative;
  color : ${({theme}) => theme.titleFg};
  background-color : ${({theme}) => theme.titleBg};
  text-align: left;
  min-height: 30px;
  padding : 0.2rem;
  border-bottom : 1px solid ${({theme}) => theme.borderColor};
  border-radius : 4px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  display:flex;
  align-items: center;
  p{
    font-size: 0.8rem;
    color: #777;
  }
`

const Footer = styled(Header)`
  text-align : left;
  border-radius : 4px;
  border-bottom : none;
  border-top : 1px solid ${({theme}) => theme.borderColor};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding : 0.2rem;
  display : flex;
  align-items : center;
  justify-content : space-evenly;
`


const Box = styled.div`
  position : relative;
  min-height : 60px;
  background-color: ${({theme}) => theme.cardBg};
  margin-block: 0.5rem; 
  box-shadow: 0px 4px 4px  ${({theme}) => theme.cardShadow};
  border-radius : 4px;
  border : 1px solid ${({theme}) => theme.borderColor};
`


const Delete = styled.button`
  position: absolute;
  top: 0%;
  right: 0%;
  transform: translate(-50%,50%);
  background-color : #ff5252;
  padding: 0;
  width : 16px;
  height : 16px;
  color : white;
  font-weight : bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`

const Content = styled.div`
  position: relative;
  padding : 0.4rem;
  text-align: left;
  color : ${({theme}) => theme.fg};
  background-color : ${({theme}) => theme.cardBg};
  p{
    display : inline;
    ${'' /* they are literally just alternate names for each other. Some browsers support one and not the other */}
    overflow-wrap: break-word;
    word-wrap: break-word;

    ${'' /* add a hyphen where it breaks if the browser supports it */}
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hypens : auto;
  }

  a{
    color : #535bf2;;
    text-decoration : underline;
  }

`

const Button = styled.button`
  padding: 0.2rem 0.4rem;
  border-radius : 4px;
  color : ${({theme}) => theme.cardFg};
  background-color : transparent;
  border : 1px solid ${({theme}) => theme.borderColor};
  &:hover{
    color : ${({theme}) => theme.hoverFg};
    background-color : ${({theme}) => theme.hoverBg};
  }
`

export const MoveCard = styled.div` 
  width: 100%;
  padding: 0.2rem 0.4rem;
  border-radius : 4px;
  border : 1px solid ${({theme}) => theme.borderColor};
  display: flex;
  align-items: strech;
  justify-content: space-evenly;
  select{
    border-color: red;
    border-radius: 2px;
    color : ${({theme}) => theme.titleFg};
    background-color : transparent;
    border : 1px solid ${({theme}) => theme.borderColor};
  }
  p{
    color : ${({theme}) => theme.titleFg};
  }
  button{
    border-radius: 2px;
    color : ${({theme}) => theme.titleFg};
    background-color : transparent;
    border : 1px solid ${({theme}) => theme.borderColor};
    padding: 0.1rem 0.4rem;
    &:hover{
      color : ${({theme}) => theme.hoverFg};
      background-color : ${({theme}) => theme.hoverBg};
    }
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