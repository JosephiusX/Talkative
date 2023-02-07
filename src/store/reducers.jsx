import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import topicsReducer from './topicsSlice';
import phrasesReducer from './phrasesSlice';

export const store = configureStore({
  reducer: combineReducers({
    topics: topicsReducer.reducer,
    phrases: phrasesReducer.reducer
  })
});

