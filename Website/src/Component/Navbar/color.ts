import { createSlice, configureStore } from '@reduxjs/toolkit';
import React from 'react';
const color = createSlice({
  name: 'color',
  initialState: {
    text: {
      color: 'black',
    },
  },
  reducers: {
    change: (state, act) => {
      console.log(act.payload);
      state.text.color = act.payload.color;
    },
  },
});

const store = configureStore({
  reducer: {
    color: color.reducer,
  },
});

export const { change } = color.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDishpatch = typeof store.dispatch;
export default store;

