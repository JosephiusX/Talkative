import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTopic } from '../../store/topicsSlice';

export const TopicsForm = () => {
  const [topic, setTopic] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTopic(topic));
    setTopic('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
      <button type="submit">Add Topic</button>
    </form>
  );
};
