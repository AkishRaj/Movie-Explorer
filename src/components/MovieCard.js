import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  // TMDB image base URL
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img 
          src={movie.poster_path ? `${IMG_PATH}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
          alt={movie.title} 
        />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;