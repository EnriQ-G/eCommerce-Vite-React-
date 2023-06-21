import { Route, Routes, Navigate } from 'react-router-dom'
import { Home, Dashboard, Login, Signup, Secret } from '@/pages'
import { useAuthContext } from '@/hooks/useAuth'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/secret' element={isAuth ? <Secret /> : <Navigate to='/login' />} />
      <Route path='/dashboard' element={isAuth ? <Dashboard /> : <Navigate to='/login' />} />
    </Routes>
  )
}

export default RoutesIndex
