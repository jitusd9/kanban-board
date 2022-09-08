import React, { useEffect } from 'react'
import Card from './Card'
import { 
  Container,
  Header,
  Input,
  ModalButton,
  AddCard,
  Title,
  List
} from '../styled/section-styled';

import successSound from "../assests/success-sound.mp3"

import { CheckUrlsInParagraph } from './utils';

import { Button } from '../styled/card-styled';

export default function Section(props) {

  const saveAudio = new Audio(successSound);

  const [inputText, setInput] = React.useState("");
  const [showAdd, setShowAdd] = React.useState(false);

  function playIt(audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  function deleteCard(id){
      props.delFunc(id);
  }

  function handleInput(e){
    setInput(e.target.value);
  }

  function handleSave(){
    if(inputText !== ""){
      props.addFunc({txt: inputText});
    }
    setInput("")
    setShowAdd(false);
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
    <Header>
    <Title inputColor={props.hex} >
        <h2>{props.title}</h2>  
      </Title>
    </Header>

      {/* <Button id={props.id} onClick={DownloadData}>&#x2913; Download</Button> */}

      <List>
      {
        props.list &&
        props.list.map((card, index )=> {
          
          let textArray = CheckUrlsInParagraph(card.txt);

          return(
            <Card 
              key={index} 
              id={index} 
              custom={ props.custom && props.custom } 
              inputColor={props.hex} 
              delFunc={deleteCard}
              editFunc={props.addFunc}
              controls={props.controls}
              board={props.id}
              text={textArray}
            />
          )
        })
      }
      </List>
      { 
        props.editable && !showAdd ?
        <ModalButton onClick={() => setShowAdd(!showAdd)}>➕</ModalButton> : null
      }
      {
        showAdd && 
        <AddCard>
          <Input type="text" value={inputText} onChange={handleInput}/>
          <Button onClick={() =>{ playIt(saveAudio); handleSave();}}> Save Card</Button>
        </AddCard>
      }
    </Container>
  )
}
