import React from 'react'
import { Form, ImageContainer, Container } from '../styled/Login-styled'
import {Link} from 'react-router-dom'
import { Lock } from '../assests/3d'

export default function Reset() {
  return (
    <Form>
      <ImageContainer>
        <img src={Lock} alt="Avatar" class="avatar" />
        </ImageContainer>
        <Container>

          <label for="psw"><b>Enter registered email id</b></label>
          <input type="email" placeholder="Enter Email" name="psw" required />

          <button type="submit">Reset password</button>
        </Container>
    </Form>
  )
}
