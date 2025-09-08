import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// IMPORTANT: Use the correct API Key from your TMDB settings, NOT the JWT token.
const API_KEY = '338cceba9828d53c9dd9aec243943fdb'; // <-- GET THIS FROM TMDB SETTINGS -> API -> "API Key" (v4 auth)
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Construct the URL
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    console.log("Fetching movie from:", url); // Debugging: See the URL

    fetch(url)
      .then((res) => {
        console.log("Response status:", res.status); // Debugging: See the status code
        if (!res.ok) {
          throw new Error(`Failed to fetch movie. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Movie data received:", data); // Debugging: See the full response
        if (data.success === false) {
          // Handle API-specific errors (e.g., invalid API key)
          throw new Error(data.status_message || 'Movie not found.');
        }
        setMovie(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);

  // Show loading state
  if (isLoading) {
    return <div>Loading movie details...</div>;
  }

  // Show error state
  if (error) {
    return (
      <div className="error-message">
        <h2>Error Loading Movie</h2>
        <p>{error}</p>
        <p>Please check your API key and try again.</p>
      </div>
    );
  }

  // Show movie details if everything is successful
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-detail">
      <img
        src={
          movie.poster_path
            ? `${IMG_PATH}${movie.poster_path}`
            : 'https://via.placeholder.com/500x750?text=No+Image'
        }
        alt={movie.title}
      />
      <div className="detail-info">
        <h1>{movie.title}</h1>
        <p>
          <strong>Release Date:</strong> {movie.release_date || 'N/A'}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average ? `⭐ ${movie.vote_average.toFixed(1)}/10` : 'N/A'}
        </p>
        <p>
          <strong>Synopsis:</strong>{' '}
          {movie.overview || 'No overview available.'}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;