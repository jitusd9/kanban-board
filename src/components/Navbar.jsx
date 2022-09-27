import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Navpanel, ThemeButton, SVGIcon } from '../styled/app-styled'
import Sidebar from './Sidebar';
import lightMode from '../assests/light_mode.svg'
import darkMode from '../assests/dark_mode.svg'

export default function Navbar(props) {

  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const [mobileNav, setMobileNav] = useState(false);

  function toggleMobleNav(){
    setMobileNav(!mobileNav);
  }

  return (
    <>  
        {
          currentUser && location.pathname === '/dashboard' ?
           <Sidebar 
            mobile={mobileNav} 
            toggleNavFunc={toggleMobleNav}
           /> 
           : null
        }
        <Navpanel>
          {
            location.pathname === '/dashboard' ? 
          <ThemeButton 
          mobile={true}
          onClick={() => setMobileNav(!mobileNav)}
          >
            <div></div>
            <div></div>
            <div></div>
          </ThemeButton> : null
          }
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
          <ThemeButton 
            onClick={() => props.toggleTheme(!props.theme)}
          >
            <SVGIcon title='Light mode'  theme={props.theme ? '0%' : '-200%'} src={lightMode} />
            <SVGIcon title='Dark mode'  theme={props.theme ? '200%' : '0%'} src={darkMode} />

          </ThemeButton>
        </Navpanel>
    </>    
  )
}
