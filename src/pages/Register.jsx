import React,{ useState } from 'react'
import { Form, ImageContainer, Container, Loader, Toast, GoogleButton, Links } from '../styled/Login-styled'
import { useAuth } from '../context/AuthContext'
import useMounted from '../hooks/useMounted'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { addUserToDatabase } from '../utils/DatabaseOperations'


export default function Register() {

  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
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
              console.log(response);
              addUserToDatabase(response);
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

        <h2>Create a new Account</h2>

          <label htmlFor="psw">
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
            placeholder='Password'
          />
          <button
            onClick={async e => {
              e.preventDefault();
              setShowPass(!showPass);
            }}
          >
            { showPass ? <span>????</span> : <span>????</span> }
          </button>
          </label>
         

          <button 
            type="submit"
          >Register</button>

      </Form>
      <Links>
        <Link to='/login'>Already have an account? login</Link>
      </Links>

      <GoogleButton
        onClick={async e => {
          signInWithGoogle()
            .then(response => {
              console.log(response)
              addUserToDatabase(response.user.uid);
            })
            .catch(error => console.log(error))
        }}
        >
        Signup with Google
        </GoogleButton>
      </Container>       

    </>
  )
}
