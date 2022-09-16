import React, {useState} from 'react'
import { Form, ImageContainer, Container, GoogleButton, Toast, Loader } from '../styled/Login-styled'
import {Link} from 'react-router-dom'
import { Lock } from '../assests/3d'
import { useAuth } from '../context/AuthContext';
import useMounted from '../hooks/useMounted';

export default function ForgotPassword() {

  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const { forgotPassword } = useAuth();
  const mounted = useMounted();

  return (
    <>
      <Toast pop={isError ? 'true' : 'false'} color="#20c45a" >
        <div>&#x2139;</div> <p>{error}</p>
        <button onClick={() => setIsError(false)}>X</button>
      </Toast>
      <Loader loading={isSubmitting ? 'true' : 'false'} >
        <div></div>
      </Loader>
      <Container loading={isSubmitting ? 'true' : 'false'}>
        <Form onSubmit={async e => {
          e.preventDefault();
          setIsSubmitting(true);
          forgotPassword(email)
            .then(response => {
              console.log(response)
              setError('Email sent, check your email.');
              setIsError(true);
              setTimeout(() => setIsError(false), 3000);
            })
            .catch(e => {
              console.log(e.code);
              setError(e.code);
              setIsError(true);
              setTimeout(() => setIsError(false), 3000);
            })
            .finally(() => mounted.current && setIsSubmitting(false))
        }}>
        <ImageContainer>
          <img src={Lock} alt="Avatar" />
          </ImageContainer>

            <label htmlFor="email">Enter Registered email id</label>
            <input 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              type="email" 
              name="email" 
            />

            <button type="submit">Reset password</button>
        </Form>
        
        <GoogleButton type="submit">Login</GoogleButton>
      </Container>
    </>
  )
}