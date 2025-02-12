import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface FoodItem {
  id: string;
  type: string;
  image: string;
  children: any[];
}

const fetchFood = createAsyncThunk(
  'food/fetchFood',
  async (_, thunkAPI) => {
    const rs = await fetch('https://us-central1-ami-noti.cloudfunctions.net/api/all-food');
    let data = await rs.json();
    data = data.sort((a, b) => a.id - b.id);
    return data;
  },
);

const food = createSlice({
  name: 'food',
  initialState: {
    val: [] as FoodItem[],
    loading: false,
    ready: false,
    error: false,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFood.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFood.fulfilled, (state, act) => {
        state.val = act.payload;
        state.ready = true;
        state.loading = false;
      })
      .addCase(fetchFood.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export { fetchFood };
export default food.reducer;