import React from 'react'
import { Link } from 'react-router-dom'
import { Navpanel, ThemeButton } from '../styled/app-styled'

export default function Navbar(props) {
  return (
    <>
      <Navpanel>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/dashboard" >Dashboard</Link>
        </li>
        <li>
          <Link to="/login" >Login</Link>
        </li>
        <li>
          <Link to="/signup" >Signup</Link>
        </li>
        <ThemeButton title='Dark/Light mode' onClick={() => props.toggleTheme(!props.theme)}>
          {props.theme ? '🌘' : '☀️'}
        </ThemeButton>
      </Navpanel>
    </>
  )
}
