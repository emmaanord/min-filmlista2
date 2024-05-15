import React from 'react';

const OrderByGradeButton = ({ sortMovies }) => {
  return (
    <button className="btn btn-secondary mt-3" onClick={sortMovies}>Sortera efter betyg</button>
  );
};

export default OrderByGradeButton;
