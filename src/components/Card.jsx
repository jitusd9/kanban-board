import React from 'react'
import { Box, Header, Delete, Content, Footer, Button, YesNoBox } from '../styled/card-styled'
import { ControlButton, DialogBox } from './utils'


export default function Card(props) {

  const [info, toggleInfo] = React.useState(false);
  const [confirm, askConfirm] = React.useState(false);

  function showInfo(){
    toggleInfo(!info);
  }


  function DeleteIt(){
    askConfirm(false);
    props.delFunc(props.id);
  }

  return (
    <Box inputColor={props.inputColor} >

      <Header inputColor={props.inputColor}>
        <Delete title='Delete Task' onClick={() => askConfirm(!confirm)}>&#xd7;</Delete>
      </Header>

      <Content>
        {
          confirm ? <YesNoBox> 
          <p>Are you sure?</p>
          <Button onClick={DeleteIt}>Yes</Button> 
          <Button onClick={() => askConfirm(!confirm)}>No</Button> 
          </YesNoBox> : null
        }
        { 
          props.children
        }
      </Content>

      <Footer>
       
        <ControlButton 
          txt={!props.custom ? "🏋️ Doing" : "📝 Todo"} 
          func={props.controls[0]}
          cardId={props.id}
          board={props.board}
        />

        <ControlButton
          txt={ props.custom === "done" ? "🏋️ Doing" : "✅ Done" }
          func={props.controls[1]}
          cardId={props.id}
          board={props.board}
        />
       
        <ControlButton
          txt={ props.custom === "later" ? "🏋️ Doing" : "📂 Later" }
          func={props.controls[2]}
          cardId={props.id}
          board={props.board}
        />
        
        {
          info ? <DialogBox> 
            <p>Modified : 01/09/2022 6:07:36</p>
            <p>Created : 01/09/2022 6:06:15</p>
           </DialogBox> : null
        }

        <ControlButton
          txt={"ℹ️"}
          func={showInfo}
          cardId={props.id}
          board={props.board}
        />

      </Footer>
      

    </Box>
  )
}
