import React,{useState} from 'react'
import { Box, Header, Delete, Content, Footer, Button, YesNoBox,MoveCard } from '../styled/card-styled'
import { Input } from '../styled/section-styled';
import { ControlButton, DialogBox } from './utils'
import { deleteCard, moveCard } from '../utils/DatabaseOperations';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';


export default function Card(props) {

  const { currentUser } = useAuth();
  const [info, toggleInfo] = useState(false);
  const [confirm, askConfirm] = useState(false);
  const [move, setMove] = useState(props.option && props.options[0].section_id);


  function handleMove(){

    if(move !== null){
      moveCard(currentUser.uid, props.sectionId, parseInt(move, 10), props.id);
    }
  }

  function DeleteIt(){
    askConfirm(false);
    deleteCard(currentUser.uid ,props.id);
  }


  return (
    <Box 
    inputColor={props.inputColor} 
    draggable
    
    >

      <Header inputColor={props.inputColor}>
        <p>{props.created}</p>
        <Delete title='Delete Task' onClick={() => askConfirm(!confirm)}>&#xd7;</Delete>
      </Header>

      <Content >
        {
          confirm ? <YesNoBox> 
          <p>Are you sure?</p>
          <Button onClick={() =>  DeleteIt() }>Yes</Button> 
          <Button onClick={() => askConfirm(!confirm)}>No</Button> 
          </YesNoBox> : null
        }
        
        {
          props.text.map((textObj,index) => {

            if(textObj.type === 'text'){
              return(
                <p key={index}>{textObj.text}</p>
              )
            }else{
              return(
                <a key={index} href={`https://${textObj.text}`} target="_blank">
                  {
                    `${textObj.text.substring(0,10)}...`
                  }
                </a>
              )
            }
          })
        }
        
      </Content>

      <Footer>
        <MoveCard>
          <p>Move to ➡️</p>
          <select 
            name="sections" 
            value={move}
            onChange={(e) => setMove(e.target.value)}
          >
            {
              props.options.map(btn => {

                  return(
                    <option value={btn.section_id}>{btn.section_name}</option>
                  )
              })
            }
          </select>
          <button type="submit" onClick={handleMove}>move</button>
        </MoveCard>
      </Footer>
      
    </Box>
  )
}
