import { createSlice } from '@reduxjs/toolkit';

const room = createSlice({
  name: 'room',
  initialState: {
    note: 'Có đặt ăn menu tiệc được giảm 50% giá mặt bằng (Nếu lượng khách đặt tiệc tương đương khách tham gia hội nghị)',
    val: [
      {
        address: 'Hoàng Kim Sen',
        area: 1.035,
        contain: 1000,
        table: 85,
        sesion: 40e6,
        day: 70e6,
      },
      {
        address: 'Hoàng Sen',
        area: 667,
        contain: 500,
        table: 50,
        sesion: 25e6,
        day: 45e6,
      },
      {
        address: 'Kim Sen',
        area: 368,
        contain: 250,
        table: 25,
        sesion: 15e6,
        day: 30e6,
      },
      {
        address: 'Thanh Sen',
        area: 860,
        contain: 750,
        table: 62,
        sesion: 30e6,
        day: 60e6,
      },
      {
        address: 'Ngàn Sen',
        area: 402,
        contain: 500,
        table: 37,
        sesion: 20e6,
        day: 40e6,
      },
      {
        address: 'Thuyền Kim Long',
        area: 162,
        contain: null,
        table: 14,
        sesion: null,
        day: null,
      },
      {
        address: 'Thuyền Hoàng Long',
        area: 179,
        contain: null,
        table: 16,
        sesion: null,
        day: null,
      },
    ],
  },
  reducers: {

  },
});
export const { } = room.actions;
export default room.reducer;