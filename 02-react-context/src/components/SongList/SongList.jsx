import './songlist.css'
import { useSongContext } from '@/hooks/useSongContext'

const SongList = () => {
  const { list, loading, setSelectedSong } = useSongContext()

  return (
    <section>
      {loading
        ? <h2>Cargando...</h2>
        : list.map((song) => (
          <article
            key={song.id}
            className='row-song'
            onClick={() => {
              setSelectedSong(song)
            }}
          >
            <h4>{song.title}</h4>
            <h4>{song.artist}</h4>
          </article>
        ))}
    </section>
  )
}

export default SongList
