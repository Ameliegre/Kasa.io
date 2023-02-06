import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Pages/login'
import Signin from './Pages/signin'
import Home from './Pages/home'
import Error from './Components/error'
import About from './Pages/about'
import LodgingForm from './Pages/lodging-form'
import Header from './Components/header'
import Footer from './Components/footer'
import './Utils/Style/main.css'
import { AuthProvider } from './Context/AuthContext'
import RequireAuth from './Components/requireAuth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <Header/>
        <Routes>
          {/*public routes*/}
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signin' element={<Signin/>}/>

          {/*private routes*/}
          <Route element={<RequireAuth/>}>
            <Route path="/home" element={<Home/>}/>
          </Route>

          <Route element={<RequireAuth/>}>
            <Route path="/about" element={<About/>}/>
          </Route>

          <Route element={<RequireAuth/>}>
            <Route path="/lodging-form/:id" element={<LodgingForm/>}/>
          </Route>

          {/*public and private routes*/}
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);