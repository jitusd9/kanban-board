import styled from "styled-components";

const Box = styled.div`
  position : relative;
  min-height : 60px;
  color : black;
  background-color: ${({theme}) => theme.cardBg};
  margin-block: 0.4rem; 
  box-shadow: 0px 4px 4px #50626f29;
  border-radius : 4px;
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
    color : #e3e3e3;
    background-color: #232425;
  }
`


export {
  Box,
  Header,
  Delete,
  Content,
  Footer,
  Button
}