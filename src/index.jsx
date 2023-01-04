import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Pages/login'
import Home from './Pages/home'
import Error from './Components/error'
import About from './Pages/about'
import LodgingForm from './Pages/lodging-form'
import Header from './Components/header'
import Footer from './Components/footer'
import './Utils/Style/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {window.location.pathname !== '/' && <Header /> }
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/lodging-form/:id" element={<LodgingForm/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      {window.location.pathname !== '/' && <Footer /> }
    </React.StrictMode>
  </BrowserRouter>
);