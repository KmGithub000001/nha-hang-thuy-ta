import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchMenu = createAsyncThunk(
  'menu/fetchMenu',
  async (_, thunkAPI) => {
    const rs = await fetch('https://us-central1-ami-noti.cloudfunctions.net/api/all-food');
    const data = await rs.json();
    return data;
  },
);