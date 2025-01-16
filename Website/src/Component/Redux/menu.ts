import { createSlice } from '@reduxjs/toolkit';
import { fetchMenu } from './menuThunk';

interface MenuItem {
  id: number;
  type: string;
  image: string;
  children: any;
}

const menu = createSlice({
  name: 'menu',
  initialState: {
    val: [] as MenuItem[],
    loading: false,
    ready: false,
    error: false,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, act) => {
        state.val = act.payload;
        state.ready = true;
        state.loading = false;
      })
      .addCase(fetchMenu.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});
export const { } = menu.actions;
export default menu.reducer;