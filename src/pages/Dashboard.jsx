import React from 'react'
import { Main } from '../styled/app-styled'
import Heading from '../components/Header'
import Board from '../components/Board'

export default function Dashboard(props) {
  return (
    <Main>
      <Heading toggleTheme={props.toggleTheme} theme={props.theme} />
      <Board />
    </Main>
  )
}
