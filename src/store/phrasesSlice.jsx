import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addPhrase = createAsyncThunk('phrases/addPhrase', async (phrase, { getState, dispatch }) => {
  const topic = getState().selectedTopic;
  let phrases = JSON.parse(localStorage.getItem(topic)) || [];
  phrases = [...phrases, phrase];
  localStorage.setItem(topic, JSON.stringify(phrases));

  return { topic, phrases };
});

export const phrasesSlice = createSlice({
  name: 'phrases',
  initialState: { selectedTopic: '', phrases: [] },
  reducers: {
    selectTopic: (state, action) => {
      state.selectedTopic = action.payload;
      state.phrases = JSON.parse(localStorage.getItem(action.payload)) || [];
    }
  },
  extraReducers: {
    [addPhrase.fulfilled]: (state, action) => {
      state.selectedTopic = action.payload.topic;
      state.phrases = action.payload.phrases;
    }
  }
});
