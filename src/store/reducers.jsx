import { configureStore } from '@reduxjs/toolkit';
import { topicsSlice } from './topicsSlice';
import { phrasesSlice } from './phrasesSlice';

export default configureStore({
  reducer:{
    topics: topicsSlice.reducer,
    phrases: phrasesSlice.reducer
  }
});

