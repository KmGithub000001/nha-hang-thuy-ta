import { configureStore } from '@reduxjs/toolkit';
import food from './food';
import room from './room';
import image from './image';
import menu from './menu';
import validator from './validator';
const store = configureStore({
  reducer: {
    food: food,
    room: room,
    image: image,
    menu: menu,
    validator: validator,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDishpatch = typeof store.dispatch;
export default store;