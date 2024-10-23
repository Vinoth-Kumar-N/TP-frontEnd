import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Error from './pages/Error'
import Register from './pages/Register'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTrip from './pages/CreateTrip'
import EndOut from './pages/EndOut'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element ={<Contact/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/createtrip' element={<CreateTrip />} />
          <Route path='/endoutput' element={<EndOut />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App