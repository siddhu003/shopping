import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Features from './pages/Features/Features'
import Products from './pages/Products/Products'
import Recommendations from './pages/Categories/Categories'
import History from './pages/Reviews/Reviews'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Auth' element={<Auth />} />
          <Route path='/features' element={<Features />} />
          <Route path='/products' element={<Products />} />
          <Route path='/recommendations' element={<Recommendations />} />
          <Route path='/history'element={<History />} />
      </Routes>
  )
}

export default AllRoutes
