import React from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled/globalStyles";
import { light, dark } from "./styled/theme";

import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import AuthContextProvider, { useAuth } from "./context/AuthContext";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";

function getTheme(){
  let storedTheme = localStorage.getItem('theme');
  return storedTheme === 'false' ? false : true 
}

export default function App() {
  let storedTheme = getTheme()
  const [theme, setTheme] = React.useState(storedTheme);
  

  function toggleTheme(value){
    setTheme(value);
  }

  React.useEffect(() => {
    localStorage.setItem('theme',theme);
  },[theme])

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme ? light : dark}>
        <GlobalStyles />
        <BrowserRouter>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={ <Landingpage theme={theme} /> }/>
            <Route path="/dashboard" element={ 
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }/>
            <Route path="/login" element={ 
              <RequireAuth>
                <Login />
              </RequireAuth>
             }/>
            <Route path="/register" element={
              <RequireAuth>
                 <Register />
              </RequireAuth>  
            }/>
            <Route path="/forgot-password" element={ <ForgotPassword /> }/>
            <Route path="/reset-password" element={ <ResetPassword /> }/>
            <Route path="*" element={ <NotFound /> }/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
  )
}


function RequireAuth(props){

  const { currentUser } = useAuth();
  const location = useLocation();

  if(
    location.pathname === '/login' || 
    location.pathname === '/register' || 
    location.pathname === '/reset'
  ){
    return currentUser ? 
    <Navigate to={location.state?.from ?? '/dashboard'} />
    : props.children
  }

  return currentUser ? props.children : <Navigate to='/login' state={{ from: location.pathname }} replace />;
}