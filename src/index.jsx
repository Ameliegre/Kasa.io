import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/home'
import Error from './Components/error'
import About from './Pages/about'
import LodgingForm from './Pages/lodging-form'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/*" element={<Error/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/lodging-form" element={<LodgingForm/>}/>
        </Routes>
    </React.StrictMode>
  </BrowserRouter>
);