import React from 'react'
import { Box, Header, Delete, Content, Footer, Button } from '../styled/card-styled'


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
        <Button> 🏋️ Doing </Button>
        <Button> ✅ Done </Button>
      </Footer>

    </Box>
  )
}
