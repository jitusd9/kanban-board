import styled from "styled-components";

const Box = styled.div`
  position : relative;
  min-height : 60px;
  color : black;
  background-color: var(--card-bg);
  margin-block: 0.4rem; 
  box-shadow: 0px 4px 4px #50626f29;
  border-radius : 4px;
`

const Header = styled.div`
  position : relative;
  color : var(--title-fg);
  background-color : var(--title-bg);
  text-align: right;
  padding : 0.1rem 0.2rem;
  border-bottom : 1px solid var(--border-color);
  border-radius : 4px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`

const Delete = styled.button`
  position: relative;
  background-color : red;
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
  color : var(--card-fg);
  background-color : var(--card-bg);
`

const Footer = styled(Header)`
  text-align : left;
  border-radius : 4px;
  border-bottom : none;
  border-top : 1px solid var(--border-color);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`

const Button = styled.button`
  margin : 0.2rem;
  padding: 0.2rem 0.4rem;
  border-radius : 4px;
  color : var(--card-fg);
  background-color : transparent;
  border : 1px solid #e3e3e3;
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