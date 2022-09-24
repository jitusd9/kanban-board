import styled,{ keyframes } from "styled-components";


const Container = styled.div`
  padding : 1rem;
  background-color: ${({theme}) => theme.formBg};
  max-width: 400px;
  margin-inline: auto;
  margin-top: 50px;
  pointer-events: ${(props) => props.loading === 'true' ? 'none': 'all'};
  border-radius: 8px;
  border-bottom: 1px solid #7c7c7c;
`

const loading = keyframes`
  from{
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to{
    transform: translate(-50%,-50%) rotate(360deg);
  }
`

const Loader = styled.div`
  display: ${(props) => props.loading === 'true' ? 'block': 'none'};
  position: absolute;
  z-index: 1;
  inset : 0;
  background-color : rgba(0,0,0,0.6);
  div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 3rem;
    width: 3rem;
    border: 4px solid deepskyblue;
    border-left-color: blue;
    border-radius: 50%;
    animation: ${loading} 400ms infinite linear;
  }
`

const Toast = styled.div`
  display: ${(props) => props.pop === 'true' ? 'flex': 'none'};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: ${(props) => props.color ? props.color : 'salmon'};
  z-index: 1;
  border-radius: 4px;
  padding: 0.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  align-items: center;
  div{
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p{
    color: #222;
    padding: 0.5rem;
  }
  button{
    color: #333;
    font-weight: bold;
    position: absolute;
    top : 4px;
    right: 4px;
    background-color: transparent;
  }
`

const Form = styled.form`
  position: relative;
  max-width: 400px;
  margin-inline: auto;
  padding: 0;
  text-align: left;
  border-radius: 8px;

  h2{
    color: ${({theme}) => theme.formFg};
    text-align: center;
    font-size: 1.5em;
    margin-block: 0.5rem;
  }
  input{
    width: 100%;
    font-size: 1.2em;
    padding: 0.5rem 1rem;
    margin: 0.5rem auto;
    display: inline-block;
    border: 1px solid #aaa;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: ${({theme}) => theme.formBg};
  }
  label{
    color: ${({theme}) => theme.formFg};
  }
  button{
    background-color: steelblue;
    color: white;
    padding: 0.8rem 1.2rem;
    margin: 8px 0;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    &:hover{
      background-color : deepskyblue;
    }
  }

`

const Input = styled.input.attrs({ 
  type: 'text',
})`
border: 2px solid green;
`

const ImageContainer = styled.div`
  text-align: center;
  img{
    width: 100px;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 1rem;
  a{
    color: steelblue;
    font-weight: bold;
    &:hover{
      text-decoration: underline;
    }
  }
`


const GoogleButton = styled.button`
  padding: 0.8rem 1.2rem;
  font-size: 1em;
  color: white;
  ${'' /* background: linear-gradient(mediumpurple 80%, blueviolet); */}
  ${'' /* background: ${({theme}) => theme.blueGrad}; */}
  background-color: steelblue;
  border-radius: 4px;
  width: 100%;
  &:hover{
    background-color : deepskyblue;
  }
`


export {Form, ImageContainer, Container, Input, Loader, Toast, GoogleButton, Links}