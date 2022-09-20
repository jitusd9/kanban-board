import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Navpanel, ThemeButton } from '../styled/app-styled'

export default function Navbar(props) {

  const { currentUser, logout } = useAuth();

  return (
    <Navpanel>
      <li>
        <Link to="/" >Home</Link>
      </li>
      {
        currentUser && <li> <Link to="/dashboard" >Dashboard</Link> </li>
      }
      {
        !currentUser && <li> <Link to="/login" >Login</Link> </li>
      }
      {
        !currentUser && <li> <Link to="/register" >Register</Link> </li>
      }
      {
        currentUser && <li onClick={async e => {
                          e.preventDefault();
                          logout();
                        }}>
                        <Link to="/login" >Logout</Link>
                      </li>
      }
      <ThemeButton title='Dark/Light mode' onClick={() => props.toggleTheme(!props.theme)}>
        {props.theme ? '🌘' : '☀️'}
      </ThemeButton>
    </Navpanel>
  )
}
