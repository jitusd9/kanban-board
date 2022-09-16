import React from "react";
import {Link} from 'react-router-dom'
import { Container, Welcome, Cta , TitleBar, Tab, Monitor} from '../styled/landingpage-styled'
import { Laptop, BoardThumb, Notebook, Rocket, Trophy } from "../assests/3d"

export default function Landingpage(props){

  return(
    <Container>
      <Welcome>
        <h1>Kanban Board</h1>
      </Welcome>
      <Monitor>
        <TitleBar>
          <Tab> 🌏 Kanban : Your board</Tab>
          <Tab> 🌏 New Tab</Tab>
          <Tab> &#x271A; </Tab>
        </TitleBar>
        
        <img src={BoardThumb} alt="" />
        
        <Link to="/login">   
          <Cta>
            Get Started
          </Cta>
        </Link>
        
      </Monitor>
    </Container>
  )
}