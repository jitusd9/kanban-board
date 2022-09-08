import React from "react"
import { Main} from "./styled/app-styled";
import Heading from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled/globalStyles";
import { light, dark } from "./styled/theme";
import Board from "./components/Board";

function getTheme(){
  let storedTheme = localStorage.getItem('theme');
  return storedTheme === 'false' ? false : true 
}

function App() {
  let storedTheme = getTheme()
  const [theme, setTheme] = React.useState(storedTheme);
  // const [flash, setFlash] = React.useState(false);

  function toggleTheme(value){
    setTheme(value);
    // setFlash(true);
    // setTimeout(() => {
    //   setFlash(false);
    // }, 1200);
  }

  React.useEffect(() => {
    localStorage.setItem('theme',theme);
  },[theme])

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <GlobalStyles />
      <Main>
      {/* <canvas></canvas>
        {
          flash ? <Flash>Hurray 🎉</Flash> : null
        } */}
        <Heading toggleTheme={toggleTheme} theme={theme} />
        <Board />
      </Main>
    </ThemeProvider>
  )
}

export default App
