import React from 'react'
import { Form, ImageContainer, Container } from '../styled/Login-styled'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { Rocket } from '../assests/3d'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

function useQuery(){
  const location = useLocation();
  return new URLSearchParams(location.search);
}

export default function ResetPassword() {

  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const query = useQuery();
  const [password, setPassword] = useState('');
  console.log(query.get('continueUrl'));

  return (
    <Container>
      <Form onSubmit={async e => {
        e.preventDefault();
        resetPassword(query.get('oobCode'), password)
        .then(response => {
          console.log(response);
          navigate('/login');
        })
        .catch(error => console.log(error))
      }}>
      <ImageContainer>
        <img src={Rocket} alt="Avatar" />

        </ImageContainer>

        <label htmlFor="email">Enter New Password</label>
        <input 
          value={password}
          onChange={(e )=> setPassword(e.target.value)}
          type="password" 
          name="password" 
          required 
        />

        <button type="submit">Change password</button>

      </Form>
    </Container>
  )
}
