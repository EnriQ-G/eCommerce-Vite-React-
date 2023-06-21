import { Route, Routes } from 'react-router-dom'
import { Home, Dashboard, Login, Signup, Profile } from '@/pages'

import React from 'react'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/dashboard' element={<Dashboard />} />

    </Routes>

  )
}

export default RoutesIndex
