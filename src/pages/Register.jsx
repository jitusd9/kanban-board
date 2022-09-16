import React,{ useState } from 'react'
import { Form, ImageContainer, Container, Loader, Toast, GoogleButton, Links } from '../styled/Login-styled'
import { Laptop } from '../assests/3d'
import { useAuth } from '../context/AuthContext'
import useMounted from '../hooks/useMounted'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function Register() {

  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const { register, signInWithGoogle }  = useAuth();
  const mounted = useMounted();

  return (
    <>
      <Toast pop={isError ? 'true' : 'false'}>
        <p>{error}</p>
      </Toast>
      <Loader  loading={isSubmitting ? 'true' : 'false'}>
        <div></div>
      </Loader>
      <Container>
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
          register(email,password)
            .then(response => {
              navigate(location.state?.from ?? '/dashboard', {replace: true});
            })
            .catch(error => {
              setError(error.code);
              setIsError(true);
              setTimeout(()=> setIsError(false),3000);
            })
            .finally(() => mounted.current && setIsSubmitting(false))
        }}

        loading={isSubmitting ? 'true' : 'false'}
      >
        <div className="loader">  </div>
        <ImageContainer>
        <img src={Laptop} alt="Avatar" />
        </ImageContainer>
        <h2>Create a new Account</h2>

          <label htmlFor="psw">Email</label>
          <input 
            value={email} 
            onChange={(e)=> setEmail(e.target.value)} 
            type="email" 
            autoComplete='email' 
            name="email" 
             
          />

          <label htmlFor="psw">Password</label>
          <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            name="password" 
             
          />

          <button 
            type="submit"
          >Register</button>

      </Form>
      <Links>
        <Link to='/login'>Login</Link>
      </Links>

      <GoogleButton
        onClick={async e => {
          signInWithGoogle()
            .then(user => console.log(user))
            .catch(error => console.log(error))
        }}
        >
        Signup with Google
        </GoogleButton>
      </Container>       

    </>
  )
}
