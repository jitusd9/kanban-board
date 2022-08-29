import styled from "styled-components";

const Main = styled.div`
`

const Input = styled.input`
  font-size : 2.5em;
  line-height : 1.1;
  font-weight : bold;
  width : 100%;
  text-align : center;
  background-color : transparent;
  border : none;
`

const Header = styled.div`
  color : var(--header-fg);
  background-color : var(--header-bg);
  padding : 1rem;
  border-radius: 4px;
`

const Container = styled.div`
  display: flex;
`

export {Main, Input, Header, Container}