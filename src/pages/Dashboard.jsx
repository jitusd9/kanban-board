import React from 'react'
import { Main } from '../styled/app-styled'
import Heading from '../components/Header'
import Board from '../components/Board'
import { useAuth } from '../context/AuthContext'

export default function Dashboard(props) {

  const { currentUser } = useAuth();
  
  return (
    <Main>
      <p>{currentUser && currentUser.email}</p>
      <Heading toggleTheme={props.toggleTheme} theme={props.theme} />
      <Board />
    </Main>
  )
}
