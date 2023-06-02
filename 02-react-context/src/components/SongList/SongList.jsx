import { useEffect, useState } from 'react'
import './songlist.css'
import canciones from '@/assets/listaCanciones.json'

const SongList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <section>
      {loading
        ? <h2>Cargando...</h2>
        : list.map((song) => (
          <article key={song.id} className='row-song'>
            <h4>{song.title}</h4>
            <h4>{song.artist}</h4>
          </article>
        ))}
    </section>
  )
}

export default SongList
