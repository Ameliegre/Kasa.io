import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Pages/login'
import Signin from './Pages/signin'
import Home from './Pages/home'
import Error from './Components/error'
import About from './Pages/about'
import Lodge from './Pages/lodge'
import Me from './Pages/me'
import './Utils/Style/main.css'
import { AuthProvider } from 'react-auth-kit'
import { RequireAuth } from 'react-auth-kit'
import { Provider } from 'react-redux'
import store from '../src/Utils/store'
import ManageLodge from './Pages/manage_lodge'
import NewLodge from './Pages/new_lodge'
import Favorite from './Pages/favorite'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
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
              <Route path="/lodge/:id" element={<RequireAuth loginPath='/login'><Lodge/></RequireAuth>}/>
              <Route path="/me" element={<RequireAuth loginPath='/login'><Me/></RequireAuth>}/>
              <Route path="/manage_lodge" element={<RequireAuth loginPath='/login'><ManageLodge/></RequireAuth>}/>
              <Route path="/new_lodge" element={<RequireAuth loginPath='/login'><NewLodge/></RequireAuth>}/>
              <Route path="/favorite" element={<RequireAuth loginPath='/login'><Favorite/></RequireAuth>}/>
          </Routes>
        </React.StrictMode>
      </BrowserRouter>
    </AuthProvider>
  </Provider>
  
);