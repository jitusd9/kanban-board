import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled/globalStyles";
import { light, dark } from "./styled/theme";

import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Reset from "./pages/Reset"
import NotFound from "./pages/NotFound";

function getTheme(){
  let storedTheme = localStorage.getItem('theme');
  return storedTheme === 'false' ? false : true 
}

function App() {
  let storedTheme = getTheme()
  const [theme, setTheme] = React.useState(storedTheme);
  
  function toggleTheme(value){
    setTheme(value);
  }

  React.useEffect(() => {
    localStorage.setItem('theme',theme);
  },[theme])

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <GlobalStyles />
      <BrowserRouter>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={ <Landingpage /> }/>
          <Route path="/dashboard" element={ <Dashboard /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/signup" element={ <Signup /> }/>
          <Route path="/reset" element={ <Reset /> }/>
          <Route path="*" element={ <NotFound /> }/>
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
