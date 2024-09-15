import {React, useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Mainlayout from './Layout/Mainlayout'
import Home from './pages/Home'
import About from './pages/About'
import Leadership from './pages/Leadership'
import Contactus from './pages/Contactus'
import Benefits from './pages/Benefits'
import Library from './pages/Library'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContext, UserContextProvider } from './context/UserContext'
import Profile from './pages/Profile'
import ProfLibrary from './pages/ProfLibrary'
import ProtectedRoute from './components/ProtectedRoute'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

export default function App() {
  const { user } = useContext(UserContext);
  console.log(user)
  return (
    <UserContextProvider>
      <Toaster duration={2000} position ='top-right' />
      <Routes>
        {/* home page layout  */}
        <Route element={<Mainlayout/>}>
          <Route path='/' element={<Home /> } />
          <Route path='/about' element={<About /> } />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/benefits' element={<Benefits />} />
          <Route path='/library' element={<Library />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/profLibrary' element={<ProfLibrary/>} />
          </Route>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}
