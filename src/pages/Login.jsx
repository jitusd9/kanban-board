import React,{useState,  useEffect} from 'react'
import { Form, ImageContainer, Container, Loader, Toast, GoogleButton, Links } from '../styled/Login-styled'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import useMounted from '../hooks/useMounted'

export default function Login() {

  const navigate = useNavigate()
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const { login, signInWithGoogle }  = useAuth();
  const mounted = useMounted();

  return (
    <>
      <Toast pop={isError ? 'true' : 'false'}>
        <div>&#x2139;</div> <p>{error}</p>
        <button onClick={() => setIsError(false)}>X</button>
      </Toast>
      <Loader  loading={isSubmitting ? 'true' : 'false'}>
        <div></div>
      </Loader>
      <Container loading={isSubmitting ? 'true' : 'false'}>
      <Form
        onSubmit={async e=> {
          e.preventDefault();
          if(!email || !password){
              setError('Credentials Not Valid');
              setIsError(true);
              setTimeout(()=> setIsError(false),3000);
            return;
          }
          setIsSubmitting(true);
          login(email,password)
            .then(response => {
              // replace:true won't add to history 
              navigate(location.state?.from ?? '/dashboard', {replace: true});
            })
            .catch(error => {
              console.log(error);
              setError(error.code);
              setIsError(true);
              setTimeout(()=> setIsError(false),3000);
            })
            .finally(() => mounted.current && setIsSubmitting(false))
        }}
        >
        <ImageContainer>
        </ImageContainer>
        <h2>Login</h2>
        <label htmlFor="uname">
        <input 
          value={email} 
          onChange={(e)=> setEmail(e.target.value)} 
          type="email" 
          autoComplete='email'
          name="email"
          placeholder='Email' 
        />
        </label>
        

        <label htmlFor="psw">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPass ? "text" : "password"} 
          name="password" 
          placeholder="Password"
        />
        <button
        onClick={async e => {
          e.preventDefault();
          setShowPass(!showPass);
        }}
        >{ showPass ? <span>????</span> : <span>????</span> }</button>
        </label>
        
        <button type="submit">Login</button>
      </Form>
      <Links>
        <Link to="/forgot-password">Forgot password?</Link>
        <Link to="/register">create a new account</Link>
      </Links>
      <GoogleButton 
        onClick={e => 
          signInWithGoogle()
            .then(user => console.log(user))
            .catch(error => console.log(error))
        }
        >Login In with Google</GoogleButton>
      </Container>

    </>
  )
}
