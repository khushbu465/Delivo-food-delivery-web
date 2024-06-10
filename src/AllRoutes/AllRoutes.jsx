import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'

const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AllRoutes
