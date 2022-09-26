import React, { useEffect, useState, useRef } from 'react'
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
  Placeholder,
} from '../styled/section-styled';

import { CheckUrlsInParagraph } from './utils';
import { Button, Delete } from '../styled/card-styled';
import { insertCard, getCards, deleteSection , moveCard } from '../utils/DatabaseOperations';
import { useAuth } from '../context/AuthContext';

import { doc, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../utils/init-firebase';
import Loader from './Loader';
import { createRef } from 'react';

export default function Section(props) {

  const { currentUser } = useAuth();

  const listContainerRef = useRef();
  const cardRef = createRef();


  const [loading, setLoading] = useState(false);
  const [inputText, setInput] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [cards, setCards] = useState([]);


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
      insertCard(currentUser.uid ,inputText, 0, props.id)
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


  function cardsChanged(data){
    let filteredCard = data.filter(card => {
      return card.data.section_id === props.id
    })
    setCards(filteredCard);
  }

  useEffect(() => {
    setLoading(true);
    fetchUserCards(currentUser.uid);
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

  function dragStart(e){
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);

  }

  const drop = (e) => {
    e.preventDefault();
    
    const card_id = e.dataTransfer.getData('card_id');

    moveCard(currentUser.uid,  parseInt(listContainerRef.current.id, 10), card_id)
  }


  return (
    <Container
    id={props.id}
    onDragOver={e => e.preventDefault()}
    onDrop={drop}
    ref={listContainerRef}
    >
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

      { 
        loading ? <Loader /> : cards.length === 0 ? <Placeholder>Nothing to Display</Placeholder> :
        
        <List 
          id={props.id}
        >
        {
          cards.map((card, index )=> {
            let textArray = CheckUrlsInParagraph(card.data.content);
            let dateObj = card.data.created?.toDate();
            let time = dateObj?.toLocaleString();
            return(
              <Card 
                key={index} 
                id={card.id} 
                idx={index}
                delFunc={deleteCard}
                sectionId={card.data.section_id}
                sectionName={props.title}
                text={textArray}
                created={time}   
                dragStartFunc={dragStart}
                ref={cardRef}
              />
            )
          })
        }
        </List>
      }

      { 
        props.editable && !showAdd ?
        <ModalButton onClick={() => setShowAdd(!showAdd)}>
          
        <svg width="288" height="288" viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M115 0C106.716 0 100 6.71572 100 15V100H15C6.71573 100 0 106.716 0 115V172C0 180.284 6.71571 187 15 187H100V273C100 281.284 106.716 288 115 288H172C180.284 288 187 281.284 187 273V187H273C281.284 187 288 180.284 288 172V115C288 106.716 281.284 100 273 100H187V15C187 6.71573 180.284 0 172 0H115Z" fill="#868686"/>
        </svg>

        </ModalButton> : null
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
