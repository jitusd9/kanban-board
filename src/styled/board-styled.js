import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 260px;
  min-height: 400px;
  background-color: var(--board-bg);
  margin: 0.4rem;
  padding : 0.4rem;
  border-radius: 4px;
`
const Input = styled.textarea`
  position : relative;
  width : 100%;
  padding: 0.2rem;
  font-size : 1.2rem;
  border : 1px solid transparent;
  color : var(--card-fg);
  background-color : var(--card-bg);
`

const Button = styled.button`
  position: relative;
  border-radius: 3px;
  border: 1px solid transparent;
  color: #242526;
  margin: 1em;
  padding: 0.5em 1em;
  background-color : #e3e3e3;
`

const ModalButton = styled(Button)`
  margin : 0.5rem;
`

const Title = styled.div`
  position : relative;
  min-height : 60px;
  color : black;
  background-color: ${props => props.inputColor || '#fff'};
  box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
  border-radius : 4px;
  display : flex;
  justify-content: center;
  align-items : center;
`

const AddCard = styled(Title)`
  display : block;
  padding : 0.4rem;
  margin-top : 0.5rem;
  background-color : var(--title-bg);
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