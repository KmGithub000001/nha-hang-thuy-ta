import { configureStore } from '@reduxjs/toolkit';
import menu from './menu';
import room from './room';
const store = configureStore({
  reducer: {
    menu: menu,
    room: room,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDishpatch = typeof store.dispatch;
export default store;