import {createSlice} from '@reduxjs/toolkit';
const api = createSlice({
  name: 'api',
  initialState: {
    host: 'https://us-central1-ami-noti.cloudfunctions.net/api',
    
  },
  reducers: {

  },
});

export const {} = api.actions;
export default api.reducer;