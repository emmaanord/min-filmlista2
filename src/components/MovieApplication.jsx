import React, { useState } from 'react';
import AddMovieForm from './AddMovieForm';
import Movies from './Movies';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';

// Komponent för filmapplikationen.
const MovieApplication = () => {
  const [movies, setMovies] = useState([]);

  // Funktion för att lägga till en film.
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
// Funktion för att ta bort en film.
  const removeMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  };

  // Funktion för att sortera filmerna.
  const sortMovies = (type) => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (type === 'alpha') {
        return a.title.localeCompare(b.title);
      } else if (type === 'grade') {
        return b.grade - a.grade;
      }
      return 0;
    });
    setMovies(sortedMovies);
  };

  return (
    // Visar upp filmerna i listan.
    <div className="container">
      <h1>Min Filmlista</h1>
      <AddMovieForm addMovie={addMovie} />
      <Movies movies={movies} removeMovie={removeMovie} />
      <OrderByAlphaButton sortMovies={() => sortMovies('alpha')} />
      <OrderByGradeButton sortMovies={() => sortMovies('grade')} />
    </div>
  );
};

export default MovieApplication;
