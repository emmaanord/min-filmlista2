import React from 'react';

const OrderByAlphaButton = ({ sortMovies }) => {
  return (
    <button className="btn btn-secondary mt-3" onClick={sortMovies}>Sortera alfabetiskt</button>
  );
};

export default OrderByAlphaButton;
