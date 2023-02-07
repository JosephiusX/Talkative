import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Topics = () => {
  const topics = useSelector((state) => state.topics);

  return (
    <>
    <ul>
      {topics.map((topic) => (
        <li key={topic}>
          <Link to={`/phrases/${topic}`}>{topic}</Link>
        </li>
      ))}
    </ul>
    </>
  );
};
