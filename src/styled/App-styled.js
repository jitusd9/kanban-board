import styled from "styled-components";

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
  h1{
    display : inline-block;
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
  float: right;
  background-color : transparent;
`

export {Main, Input, Header, Container, ThemeButton}