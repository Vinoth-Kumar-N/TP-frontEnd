import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Error from './components/Error'
import Register from './components/Register'
import Home from './components/Home'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import CreateTrip from './pages/CreateTrip'
import EndOut from './components/EndOut'

const App = () => {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/createtrip' element={<CreateTrip />} />
          <Route path='/endoutput' element={<EndOut/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App