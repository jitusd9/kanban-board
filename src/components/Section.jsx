import React, { useEffect, useState } from 'react'
import Card from './Card'
import { 
  Container,
  Header,
  Input,
  ModalButton,
  AddCard,
  Title,
  List,
  DeleteButton,
  DialogBox,
  Placeholder
} from '../styled/section-styled';

import { CheckUrlsInParagraph } from './utils';
import { Button, Delete } from '../styled/card-styled';
import { insertCard, getCards,deleteSection } from '../utils/DatabaseOperations';
import { useAuth } from '../context/AuthContext';

import { doc, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../utils/init-firebase';
import Loader from './Loader';

export default function Section(props) {

  const { currentUser } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [inputText, setInput] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [cards, setCards] = useState([]);
  const [btnFunctions,setBtnFunctions] = useState([]);

  function deleteCard(id){
      props.delFunc(id);
  }

  function handleInput(e){
    setInput(e.target.value);
  }

  function askConfirm(){
    setConfirm(!confirm);
  }

  function deleteColumn() {
    console.log('Deleting...')
    setConfirm(false);
    deleteSection( currentUser.uid ,props.id)
  }

  function handleSave(){
    if(inputText !== ""){
      insertCard(currentUser.uid ,inputText, 0, props.id, currentUser.uid)
      .then(res => {}).catch(err => console.log(err))
    }
    setInput("")
    setShowAdd(false);
  }

  async function fetchUserCards(uid){
    const data = await getCards(uid);
    cardsChanged(data);
    setLoading(false);
  }

  function buttonsForCards() {  
    let btns = props.options.filter(btn => btn.section_id !== props.id)
    setBtnFunctions(btns);
  }

  function cardsChanged(data){
    let filteredCard = data.filter(card => {
      return card.data.section_id === props.id
    })
    setCards(filteredCard);
  }

  useEffect(() => {
    setLoading(true);
    fetchUserCards(currentUser.uid);
    buttonsForCards();
  },[])

  useEffect(() => {

    const userRef = doc(db, 'users', currentUser.uid);
    const q = query(collection(userRef, 'cards'), orderBy("created", "asc"))
    const unsubscribe = onSnapshot(q, snapshot => {
      let newCards = [];
      snapshot.forEach(doc => {
       newCards.push({
         id: doc.id,
         data: doc.data()
        })
      })
      cardsChanged(newCards)
    })

    return () => {
      unsubscribe();
    }

  },[])

  return (
    <Container>
    <Header>
      <Title inputColor={props.bg} >
        <h2>{props.title}</h2> 
        <DeleteButton title='Delete Column' onClick={askConfirm}>&#xd7;</DeleteButton>
      </Title>
    </Header>
    {
      confirm ? 
      <DialogBox>
        <p> <span>⚠️Are you sure?</span> <br /> You will loose entire section data!</p>
        <button onClick={deleteColumn}>Yes</button>
        <button  onClick={() => {setConfirm(false)}}>No</button>
      </DialogBox> 
      : null
    }
    <List>
      { 
        loading ? <Loader /> : cards.length === 0 ? <Placeholder>Nothing to Display</Placeholder> :
        cards.map((card, index )=> {
          let textArray = CheckUrlsInParagraph(card.data.content);
          let dateObj = card.data.created?.toDate();
          let time = dateObj?.toLocaleString();
          return(
            <Card 
              key={index} 
              id={card.id} 
              custom={ props.custom && props.custom } 
              inputColor={props.hex} 
              delFunc={deleteCard}
              editFunc={props.addFunc}
              controls={props.controls}
              sectionId={card.data.section_id}
              sectionName={props.title}
              text={textArray}
              created={time}
              options={btnFunctions}
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
          <Button onClick={() =>{ handleSave()}}> Save Card</Button>
        </AddCard>
      }
    </Container>
  )
}
