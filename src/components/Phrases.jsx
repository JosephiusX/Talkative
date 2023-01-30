import React from 'react';
import { useSelector } from 'react-redux';

export const Phrases = ({ match }) => {
  const phrases = useSelector((state) => state.phrases);
  const { topic } = match.params;

  return (
    <ul>
      {phrases[topic].map((phrase) => (
        <li key={phrase}>{phrase}</li>
      ))}
    </ul>
  );
};

