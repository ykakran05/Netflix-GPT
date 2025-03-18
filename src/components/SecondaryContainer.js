import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector((store) => store?.movies)
  return ( 
    movies.nowPlayingMovies && (
      <div className="absolute bg-black mt-[13%] w-[180%]">
        
        {/* Background Layer for Secondary Section */}
        <div className="absolute inset-0 -z-10 h-[80vh] "></div>
  
        {/* Movie Lists - Pulling content up */}
        <div className="relative z-20 -mt-40 px-8"> 
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
  
      </div>
    )
  )
}

export default SecondaryContainer
