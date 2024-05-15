import React from 'react';
import Movie from './Movie';

// Komponent för att visa upp listan av filmer.
const Movies = ({ movies, removeMovie }) => {
  return (
    // Lista för alla filmer som loopas igenom listan och skapar en movie-komponent för varje film.
    // Movie-komponenten får en unik nyckel för att kunna tas bort i efterhand.
    <ul className="list-group">
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} removeMovie={() => removeMovie(index)} />
      ))}
    </ul>
  );
};

export default Movies;
