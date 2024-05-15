import React, { useState } from 'react';

// Komponent för att lägga till en ny film
const AddMovieForm = ({ addMovie }) => {
  // useState används för att sätta titel och betyg.
  const [title, setTitle] = useState('');
  const [grade, setGrade] = useState('');

  // Skickar in formulär och eventlyssnare för att kontrollera ifyllda fält.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !grade) {
      alert('Både titel och betyg måste anges!');
      return;
    }
    //Lägger till film med titel och betyg
    addMovie({ title, grade: parseInt(grade, 10) });
    // Återställer formuläret.
    setTitle('');
    setGrade('');
  };

  // Sidans struktur
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Titel</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="grade" className="form-label">Betyg</label>
        <select
          className="form-control"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="">Välj betyg här..</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">Spara film</button>
    </form>
  );
};

export default AddMovieForm;
