import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Pages/login'
import Signin from './Pages/signin'
import Home from './Pages/home'
import Error from './Components/error'
import About from './Pages/about'
import LodgingForm from './Pages/lodging-form'
import './Utils/Style/main.css'
import { AuthProvider } from 'react-auth-kit'
import { RequireAuth } from 'react-auth-kit'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider authType = {'cookie'}
                    authName={'_auth'}
                    cookieDomain={window.location.hostname}
                    cookieSecure={false}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
            {/*public routes*/}
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signin' element={<Signin/>}/>
            <Route path="/*" element={<Error/>}/>

            {/*private routes*/}
            <Route path="/" element={<RequireAuth loginPath='/login'><Home/></RequireAuth>}/>
            <Route path="/about" element={<RequireAuth loginPath='/login'><About/></RequireAuth>}/>
            <Route path="/lodging-form/:id" element={<RequireAuth loginPath='/login'><LodgingForm/></RequireAuth>}/>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </AuthProvider>
  
);