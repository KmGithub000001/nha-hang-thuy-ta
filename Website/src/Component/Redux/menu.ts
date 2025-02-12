import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface MenuItem {
  id: number;
  idparent: number;
  name: string;
  url: string;
  children?: MenuItem[];
}

const fetchMenu = createAsyncThunk(
  'menu/fetchMenu',
  async (_, thunkAPI) => {
    const rs = await fetch('https://us-central1-ami-noti.cloudfunctions.net/api/menu');
    const data = await rs.json();

    let menuData = data.filter((e) => e.idparent === null);

    menuData = menuData.map((e) => {
      e.children = data.filter((e1) => e1.idparent === e.id);
      return e;
    });

    menuData = menuData.sort((a, b) => a.id - b.id);
    
    return menuData;
  },
);

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

export { fetchMenu };
export default menu.reducer;