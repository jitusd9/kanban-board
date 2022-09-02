import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 310px;
  max-height: 120vh;
  background-color: ${({theme}) => theme.boardBg};
  margin: 0.4rem;
  padding : 0.4rem;
  border-radius: 4px;
  border: 8px solid ${({theme}) => theme.boardBorder};
  overflow-y: auto;
  scroll-behavior : smooth;
  ${'' /* &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    width : 2px;
    background-color: #6c6c6c;
    border-radius : 5px;
  } */}
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
`

const Title = styled.div`
  width : 100%;
  min-height : 60px;
  color : black;
  background-color: ${props => props.inputColor || '#fff'};
  box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
  border-radius : 4px;
  display : flex;
  justify-content: center;
  align-items : center;
  text-align : center;
  position : relative;
`

const AddCard = styled(Title)`
  display : block;
  padding : 0.4rem;
  margin-top : 0.5rem;
  background-color : ${({theme}) => theme.titleBg};
  border : 1px solid #e3e3e3;
`

export {
  Container,
  Input,
  Button,
  ModalButton,
  AddCard,
  Title
}