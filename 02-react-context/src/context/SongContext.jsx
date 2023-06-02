import { createContext, useState, useEffect } from 'react'
import canciones from '@/assets/listaCanciones.json'

// CONTEXT tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir LA MISMA información entre diferentes NIVELES de componentes.
// Para usar Context necesitamos seguir una serie de pasos:

const SongContext = createContext()

function SongProvider (props) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedSong, setSelectedSong] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong
  }

  return (
    <SongContext.Provider value={data}>
      {props.children}
    </SongContext.Provider>
  )
}

export {
  SongProvider,
  SongContext
}
