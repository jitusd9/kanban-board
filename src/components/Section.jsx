import React from 'react'
import Card from './Card'
import { 
  Container,
  Input,
  Button,
  ModalButton,
  AddCard,
  Title
} from '../styled/section-styled';


export default function Section(props) {

  const [inputText, setInput] = React.useState("");
  const [showAdd, setShowAdd] = React.useState(false);

  function deleteCard(id){

      props.delFunc(id);
  }

  function handleInput(e){
    setInput(e.target.value);
  }

  function handleSave(){
    setInput("")
    setShowAdd(false);
    if(inputText !== ""){
      props.addFunc({txt: inputText});
    }
  }

  return (
    <Container>
      <Title inputColor={props.hex} >
        <h2>{props.title}</h2>  
      </Title>
      {
        props.list &&
        props.list.map((card, index )=> (
          <Card 
            key={index} 
            id={index} 
            custom={ props.custom && props.custom } 
            inputColor={props.hex} 
            delFunc={deleteCard}
            controls={props.controls}
            board={props.id}
          >
            <p>{card.txt}</p>
          </Card>
        ))
      }
      { 
        props.editable && !showAdd ?
        <ModalButton onClick={() => setShowAdd(!showAdd)}>➕</ModalButton> : null
      }
      {
        showAdd && 
        <AddCard>
          <Input type="text" value={inputText} onChange={handleInput}/>
          <Button onClick={handleSave}>Save Card</Button>
        </AddCard>
      }
    </Container>
  )
}
