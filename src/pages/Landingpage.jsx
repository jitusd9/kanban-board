import React from "react";
import {Link} from 'react-router-dom'
import { Container, Showcase, Welcome, Cta , TitleBar, Tab} from '../styled/landingpage-styled'
import { Laptop, BoardThumb, Notebook, Rocket, Trophy } from "../assests/3d"

export default function Landingpage(props){

  return(
    <Container>
      <Welcome>
        <h1>Kanban Board</h1>
      </Welcome>
      <Showcase>
        <div>
          <TitleBar>
            <Tab> 🌏 Kanban : Your board</Tab>
            <Tab> 🌏 New Tab</Tab>
            <Tab> &#x271A; </Tab>
          </TitleBar>
          <img src={BoardThumb} alt="" />
        </div>
        
        <Cta>
          <Link to="/login">   
            Get started
          </Link>
        </Cta>
   
      </Showcase>
    </Container>
  )
}