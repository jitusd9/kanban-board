import styled from "styled-components";

const Form = styled.form`
  max-width: 400px;
  margin-inline: auto;
  margin-block: 2rem;
  padding: 0;
  text-align: left;
  border-radius: 8px;
  background-color: rgba(255,255,255,0.1);
  h2{
    color: ${({theme}) => theme.fg};
    text-align: center;
    font-size: 2em;
  }
  input{
    width: 100%;
    font-size: 1.2em;
    padding: 0.5rem 1rem;
    margin: 0.5rem auto;
    display: inline-block;
    border: 1px solid ${({theme})=> theme.borderColor };
    box-sizing: border-box;
    border-radius: 2px;
  }
  label{
    color: ${({theme})=> theme.fg }
  }
  button{
    background-color: #242526;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
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

const Container = styled.div`
  padding: 16px;
`

export {Form, ImageContainer, Container, Input}