import { BrowserRouter } from 'react-router-dom'
import '@/App.css'
import Navbar from '@/components/navbar/Navbar'
import RoutesIndex from '@/routes/Index'
import { AuthProvider } from '@/context/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
