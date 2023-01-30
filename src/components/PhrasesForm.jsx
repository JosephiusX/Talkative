import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addPhrase } from '../../store/phrasesSlice';

export const PhrasesForm = ({ match }) => {
  const [phrase, setPhrase] = useState('');
  const dispatch = useDispatch();
  const { topic } = match.params;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPhrase(topic, phrase));
    setPhrase('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
      <button type="submit">Add Phrase</button>
    </form>
  );
};
