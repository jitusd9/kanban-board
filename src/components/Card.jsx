import React from 'react'
import { Box, Header, Delete, Content, Footer, Button } from '../styled/card-styled'
import { ControlButton } from './utils'


export default function Card(props) {

  return (
    <Box inputColor={props.inputColor} draggable>

      <Header inputColor={props.inputColor}>
        <Delete onClick={(e) => props.delFunc(props.id)}>&#xd7;</Delete>
      </Header>

      <Content>
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
      </Footer>
      

    </Box>
  )
}
