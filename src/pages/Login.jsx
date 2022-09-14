import React from 'react'
import { Form, ImageContainer, Container } from '../styled/Login-styled'
import {Link} from 'react-router-dom'

import { KeyIcon, Profile } from '../assests/3d'

export default function Login() {
  return (
    <>
      <Form>
        <ImageContainer>
        <img src={KeyIcon} alt="Avatar" />
        </ImageContainer>
        <h2>Login</h2>
        <Container>
          <label htmlFor="uname">Username</label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw">Password</label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Login</button>
         
        </Container>

        <Container>
          <span><Link to="/reset">Forgot password?</Link></span>
        </Container>
      </Form>
    </>
  )
}
