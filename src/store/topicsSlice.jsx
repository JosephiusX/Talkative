import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addTopic = createAsyncThunk('topics/addTopic', async (topic, { getState, dispatch }) => {
  const topics = [...getState().topics, topic];
  localStorage.setItem('topics', JSON.stringify(topics));

  return topics;
});

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: JSON.parse(localStorage.getItem('topics')) || [],
  reducers: {},
  extraReducers: {
    [addTopic.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
});

