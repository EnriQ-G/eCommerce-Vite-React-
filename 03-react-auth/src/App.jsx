import { BrowserRouter } from 'react-router-dom'
import Header from '@/components/Header/Header'
import '@/App.css'
import RoutesIndex from '@/routes/Index'
import { AuthProvider } from '@/context/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
