import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const API_KEY = '338cceba9828d53c9dd9aec243943fdb'; // REPLACE THIS WITH YOUR KEY
const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch popular movies when the component loads
  useEffect(() => {
    getMovies(POPULAR_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
    if (searchQuery) {
      getMovies(SEARCH_API + searchQuery);
    } else {
      getMovies(POPULAR_API); // if search is empty, show popular
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleOnSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;