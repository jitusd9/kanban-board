import React from "react";
import {Link} from 'react-router-dom'
import { Container, Welcome,Links, Cta , Monitor} from '../styled/landingpage-styled'
import dashboardImg from "../assests/dashboard.webp"

export default function Landingpage(props){

  return(
    <Container>
      <Welcome>
        <svg width="313" height="246" viewBox="0 0 313 246" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 153C91.5 219.5 311.5 212.5 311.5 105C311.5 -2.49998 -102.5 -109.5 156.5 245" 
        stroke={props.theme ? 'black' : '#999'} strokeWidth="2"/>
        </svg>
   
        <h1>Kanban Board</h1>
        <p>personal <span>task</span> management tool</p>
      </Welcome>
     
      <Links>
        <Link to="/login">   
          <Cta>
            Get Started with Login
          </Cta>
        </Link>
        <a target="_blank" href="https://stickrr.netlify.app/">   
          <Cta>
            Checkout Anonymously
          </Cta>
        </a>
      </Links>

      <Monitor>
       
        <img src={dashboardImg} alt="Desktop" />
                
      </Monitor>
    </Container>
  )
}