import React from 'react'
import { Form, ImageContainer, Container } from '../styled/Login-styled'
import {Link} from 'react-router-dom'
import { Laptop } from '../assests/3d'

export default function Signup() {
  return (
    <>
      <Form>
        <ImageContainer>
        <img src={Laptop} alt="Avatar" />
        </ImageContainer>
        <h2>Create a new account</h2>
        <Container>
          <label htmlFor="uname">Username</label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw">Password</label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label htmlFor="psw">Email id</label>
          <input type="email" placeholder="Enter Email" name="psw" required />

          <button type="submit">Signup</button>

        </Container>
        <Container>
          <span><Link to="/reset"> Forgot password?</Link></span>
        </Container>
      </Form>
    </>
  )
}
