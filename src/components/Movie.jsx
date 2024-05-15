import React from 'react';

// Komponent för en film.
const Movie = ({ movie, removeMovie }) => {
  // Skapar stjärnor som representerar betyg och hämtas via bootstrap.
  const stars = Array.from({ length: movie.grade }, (_, index) => (
    <i key={index} className="bi bi-star-fill" style={{ color: 'gold' }}></i>
  ));

  return (
    // Lista som innehåller filmtitel och betyg med stjärnor.
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {movie.title}
      <span>
        {stars}
        <button className="btn btn-link text-danger p-0 ms-2" onClick={removeMovie}>
          <i className="bi bi-x-circle-fill" style={{ fontSize: '1.5rem' }}></i>
        </button>
      </span>
    </li>
  );
};

export default Movie;
