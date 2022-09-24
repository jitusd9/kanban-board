import React,{useState} from 'react'
import { Box, Header, Delete, Content, Footer, Button, YesNoBox } from '../styled/card-styled'
import { deleteCard } from '../utils/DatabaseOperations';
import { useAuth } from '../context/AuthContext';


function Card(props,ref) {

  const { currentUser } = useAuth();
  const [confirm, askConfirm] = useState(false);

  function DeleteIt(){
    askConfirm(false);
    deleteCard(currentUser.uid ,props.id);
  }
  
  return (
    <Box 
    id={props.id}
    inputColor={props.inputColor} 
    draggable
    onDragStart={props.dragStartFunc}
    onDragOver={e => e.stopPropagation()}
    ref={ref}
    >

      <Header id={props.id} inputColor={props.inputColor}>
        <p>{props.created}</p>
        <Delete title='Delete Task' onClick={() => askConfirm(!confirm)}>&#xd7;</Delete>
      </Header>

      <Content

      >
        {
          confirm ? 
          <YesNoBox> 
            <p>Are you sure?</p>
            <div>
              <Button onClick={() =>  DeleteIt() }>Yes</Button> 
              <Button onClick={() => askConfirm(!confirm)}>No</Button> 
            </div>
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

      </Footer>
      
    </Box>
  )
}

export default React.forwardRef(Card)