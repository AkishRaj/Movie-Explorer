# 🎬 Movie Explorer

A responsive React web application that allows users to discover, search, and explore information about movies using the TMDB (The Movie Database) API.

## ✨ Features

- **Browse Popular Movies**: Discover currently popular movies on the homepage.
- **Search Functionality**: Search for any movie by title.
- **Movie Details**: View detailed information including synopsis, rating, and release date.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Clean UI**: Modern and user-friendly interface built with CSS Grid and Flexbox.

## 🚀 Live Demo

Check out the live application: [https://akishraj.github.io/Movie-Explorer/](https://akishraj.github.io/Movie-Explorer/)

## 📸 Screenshots

Home page

<img width="1897" height="901" alt="image" src="https://github.com/user-attachments/assets/c5f39b0c-08be-4fa6-b7eb-a6fdcd1a1e8c" />

Movie Details

<img width="1886" height="893" alt="image" src="https://github.com/user-attachments/assets/106ee398-6b70-49f6-94f4-ec00db39eee4" />

## 🛠️ Tech Stack

- **Frontend**: React, JavaScript (ES6+)
- **Styling**: CSS3 (Flexbox, Grid, Responsive Design)
- **API**: [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api)
- **Routing**: React Router DOM (HashRouter)
- **Deployment**: GitHub Pages
- **Package Manager**: npm

  ## 📦 Installation & Setup

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (usually comes with Node.js)
- A TMDB API key ([Get it here](https://www.themoviedb.org/settings/api))

### Project Structure

movie-explorer/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   └── SearchBar.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── MovieDetail.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env
├── package.json
└── README.md

### 🌐 API Usage
This application uses the TMDB API to fetch movie data:

https://api.themoviedb.org/3/movie/popular - Get popular movies

https://api.themoviedb.org/3/search/movie - Search for movies

https://api.themoviedb.org/3/movie/{movie_id} - Get specific movie details

### 📱 Usage
Homepage: View a grid of popular movies on the initial load.

Search: Use the search bar to find movies by title.

Movie Details: Click on any movie card to view detailed information.

Navigation: Use the browser's back button to return to previous pages.

### 🎯 Future Enhancements
Add movie trailers using YouTube API

Implement user favorites with local storage

Add pagination for search results

Include movie genres filtering

Add dark/light mode toggle

Implement user ratings and reviews

### 👨‍💻 Developer
Akish Raj A - GitHub(https://github.com/AkishRaj) | LinkedIn(https://www.linkedin.com/in/akish-raj/)
