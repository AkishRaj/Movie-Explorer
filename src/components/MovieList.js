import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  // 1. Check if movies is falsey (undefined, null) OR not an array
  if (!movies || !Array.isArray(movies)) {
    return (
      <div className="movie-list">
        <p>No movies to display.</p> 
        {/* Or you can return null to show nothing: return null; */}
      </div>
    );
  }

  // 2. Check if the array is empty
  if (movies.length === 0) {
    return (
      <div className="movie-list">
        <p>No movies found. Try a different search!</p>
      </div>
    );
  }

  // 3. Only if movies is a valid, non-empty array, we map over it
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;