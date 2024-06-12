import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={ <Contact/>} />
       
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AllRoutes
