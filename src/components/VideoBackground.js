import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    // const [trailerId, setTrailerId] = useState(null)
    useMovieTrailer(movieId);

  return (
    <div className='absolute inset-0 -z-10 overflow-hidden'>
      <iframe 
      className='absolute top-0 left-1/2 w-[180%] h-full -translate-x-1/2 scale-x-[1.6] object-cover'
      src={"https://player.vimeo.com/video/"+trailerVideo?.key+"?autoplay=1&muted=1&loop=1&background=1?badge=0&amp;?autopause=0&amp;player_id=0&amp;app_id=58479"}
         allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
           title="PARADISO (2025) - Trailer">
            </iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  )
}

export default VideoBackground
