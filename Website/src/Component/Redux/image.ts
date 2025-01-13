import { createSlice } from '@reduxjs/toolkit';
const images = createSlice({
  name: 'image',
  initialState: {
    host: 'https://us-central1-ami-noti.cloudfunctions.net/api',
    val: {},
  },
  reducers: {
    get: (state, act) => {
      if (state.val[act.payload.img] === undefined) {
        fetch(`${state.host}/imgs/${act.payload.img}`)
          .then(rs => rs.json())
          .then(js => {
            state.val = { ...state.val, [act.payload.img]: js.data };
          })
          .catch(erro => console.log(erro));
      }

    },
  },
});
export const { get } = images.actions;
export default images.reducer;