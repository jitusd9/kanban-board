import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: ${props => props.ListWidth}px;
  height: auto;
  background-color: ${({theme}) => theme.boardBg};
  margin: 0.8rem;
  padding : 0.4rem;
  border-radius: 4px;
  border: 8px solid ${({theme}) => theme.boardBorder};
`

const Header = styled.div`
  ${'' /* border : 1px solid blue; */}
`

const List = styled.div`
  position : relative;
  width: 100%;
  min-height: 100px;
  max-height: ${props => props.ListHeight}px;
  padding-inline : 0.2rem;
  overflow-y: auto;
  scroll-behavior : smooth;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Input = styled.textarea`
  position : relative;
  width : 100%;
  padding: 0.2rem;
  font-size : 1.2rem;
  border : 1px solid transparent;
  color : ${({theme}) => theme.cardFg};
  background-color :${({theme}) => theme.cardBg};
  resize: vertical;
`

const Button = styled.button`
  position: relative;
  border-radius: 3px;
  border : 1px solid ${({theme}) => theme.borderColor};
  margin: 1em;
  padding: 0.5em 1em;
  color : ${({theme}) => theme.cardFg};
  background-color : transparent;
`

const ModalButton = styled(Button)`
  margin : 0.5rem;
  border: none;
  svg{
    height: 20px;
    width: auto;
  }
`

export const Placeholder = styled.p` 
  position: absolute;
  top : 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #aaa;
`

const Title = styled.div`
  width : 100%;
  min-height : 60px;
  color : white;
  background-color: ${props => props.inputColor || '#2d2d2d'};
  box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
  border-radius : 4px;
  display : flex;
  justify-content: center;
  align-items : center;
  text-align : center;
  position : relative;
  h2{
    text-transform: capitalize;
  }
`
export const DeleteButton = styled.button`
  position: absolute;
  top: 0%;
  right: 0%;
  transform: translate(-50%, 50%);
  border-color: transparent;
  background-color : #ff5252;
  padding: 0;
  width : 16px;
  height : 16px;
  color : white;
  font-weight : bold;
  border-radius: 50%;
`

export const DialogBox = styled.div` 
  position: absolute;
  top: 150px;
  width: calc(300px - 0.8rem);
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.8);
  border-radius: 4px;
  padding: 1rem;
  backdrop-filter: blur(3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  z-index: 1;
  span{
    font-size: 1.1rem;
    color: #ffb02f;
  }
  button{
    border-radius: 4px;
    background-color: #f9f9f9;
    margin-inline: 4px;
  }
  button:first-of-type{
    color: white;
    background-color: red;
  }
`

const AddCard = styled(Title)`
  display : block;
  padding : 0.4rem;
  margin-top : 0.5rem;
  background-color : ${({theme}) => theme.titleBg};
  border : 1px solid #e3e3e3;
`

export const Resize = styled.button` 
  position: absolute;
  top: ${props => props.t};
  left: ${props => props.l};
  height: ${props => props.h};
  width: ${props => props.w};
  padding:0;
  margin: 0;
  border: none;
  transform: translate(-50%,-50%);
  background-color: transparent;
  cursor: ${props => props.cursor};
`

export {
  Container,
  Header,
  Input,
  Button,
  ModalButton,
  AddCard,
  Title,
  List
}