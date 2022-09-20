import React from "react";
import {Link} from 'react-router-dom'
import { Container, Welcome,Links, Cta , TitleBar, Tab, Monitor} from '../styled/landingpage-styled'
import { Laptop, BoardThumb, Notebook, Rocket, Trophy } from "../assests/3d"
import thumbVideo from "../assests/screen.mp4"

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
        
        <video src={thumbVideo} autoPlay loop></video>
        
        <Links>
          <Link to="/login">   
            <Cta>
              Get Started with Login
            </Cta>
          </Link>
          <a target="_blank" href="https://stickrr.netlify.app/">   
            <Cta>
              Check no Login version
            </Cta>
          </a>
        </Links>
        
      </Monitor>
    </Container>
  )
}