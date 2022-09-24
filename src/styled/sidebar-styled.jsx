import styled from "styled-components";

export const FixedContainer = styled.div` 
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props => props.collapse ? '300px' : '70px')};
  height: 100vh;
  padding: 0.4rem;
  padding-top : 60px;
  background: ${({theme}) => theme.navGrad};
  z-index: 1;
  transition: width 0.3s;
  &*{
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    width: ${(props => props.mobile ? '300px' : '70px')};
    transform: ${(props => props.mobile ? 'translateX(0px)' : 'translateX(-70px)')};
  }

`

export const Icon = styled.div` 
  margin-inline: 0.5rem;
  font-size: 1.5rem;
`

export const Header = styled.div`
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  height: auto;
  padding-block: 0.5rem;
  margin-block: 0.5rem;
  display : flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  border-radius: 4px;
  border: 1px solid #aaa;
  transition: all 0.3s;
  h4 {
    color: white;
    font-size: 1rem;
    display : ${(props => props.collapse ? 'block' : 'none')};
  }

  @media (max-width: 768px) {
   h4{
      display : ${(props => props.mobile ? 'block' : 'none')};
    }
  }
`

export const ToggleButton = styled.button` 
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  padding: 0.2rem 0.6rem;
  margin-block: 0.5rem;
  background-color: hsla(225,30%,40%,0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  border: none;
  border-bottom: 1px solid #aaa;
  border-bottom-left-radius : 6px;
  border-bottom-right-radius : 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  p{
    color: white;
    font-size: 1.1rem;
    display: ${(props => props.collapse ? 'block' : 'none')};
  }
  &:hover::after{
    display: ${(props => props.collapse ? 'none' : 'block')};
    content: attr(data-description);
    position: absolute;
    top: 50%;
    right: -20%;
    transform: translate(100%, -50%);
    color: white;
    padding: 0.5rem;
    max-width: 300px;
    background-color : #444;
    border-radius: 3px;
  }
  @media (max-width: 768px) {
   p{
      display : ${(props => props.mobile ? 'block' : 'none')};
    }
    &:hover::after{
      display: ${(props => props.mobile ? 'none' : 'block')};
    }
  }
`

export const SectionForm = styled.form` 
  position: relative;
  width: 100%;
  padding: 1rem 0.5rem;
  display: ${(props => props.collapse ? 'block' : 'none')};
  flex-direction: column;
  justify-content: center;
  color: #222324; 
  background-color: hsla(0, 0%, 100%, 0.9);
  h4{
    width: 100%;
    margin-bottom: 0.5rem;
    padding-block: 0.5rem;
    border: 1px solid red;
  }
  button{
    width: 100%;
    color: #222324; 
    font-size: 1.1rem;
    padding: 0.5rem;
    background-color: hsla(0,0%,100%, 1);
    &:hover{
      color: white;
      background-color: #222324;
    }
  }

  @media (max-width: 768px) {
    display : ${(props => props.mobile ? 'block' : 'none')};
  }
  
`

export const Label = styled.label`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: hsla(0,0%,100%, 1);
  text-align: left;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Input = styled.input`
  width: 100%;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: white;
  padding: 0.2rem 0.4rem;
  border : 1px solid #ccc;
`


export const RadioInput = styled.input.attrs({ 
  type: 'radio'
})`
  width: 20px;
  height: 20px;
  margin-inline: 4px;
`