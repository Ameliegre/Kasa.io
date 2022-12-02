import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/lodging-form" element={<LodgingForm/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </React.StrictMode>
  </BrowserRouter>
);