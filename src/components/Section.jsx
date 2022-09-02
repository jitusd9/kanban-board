import React from 'react'
import Card from './Card'
import { 
  Container,
  Input,
  ModalButton,
  AddCard,
  Title
} from '../styled/section-styled';

import { Button } from '../styled/card-styled';


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

  function getLocaldata(id) {
    let sections = ['todos', 'doing', 'done', 'later']
    let data = JSON.parse(localStorage.getItem(sections[id]));
    return data;
  }

  // download localStorage Data 
  function DownloadData(e){
    
    let obj = getLocaldata(e.target.id);

    const element = document.createElement("a");
    const textFile = new Blob([JSON.stringify(obj)], {type: 'application/json'}); //pass data from localStorage API to blob
    element.href = URL.createObjectURL(textFile);
    element.download = `jsonFile[${e.target.id}].json`;
    document.body.appendChild(element); 
    element.click();
  }

  return (
    <Container>
      <Title inputColor={props.hex} >
        <h2>{props.title}</h2>  
      </Title>
      <Button id={props.id} onClick={DownloadData}>&#x2913; Download</Button>
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
          <Button onClick={handleSave}> Save Card</Button>
        </AddCard>
      }
    </Container>
  )
}
