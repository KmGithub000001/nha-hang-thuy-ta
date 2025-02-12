import { createSlice } from '@reduxjs/toolkit';

const validator = createSlice({
  name: 'validator',
  initialState: {
    typeID: '1',
    foodID: '2',
    food: {
      name: 'Thịt bò',
      title: 'beefsteak',
      des: 'Beefsteak',
      tag: '["Khoai tây", "Thịt bò"]',
      price: '150.000 - 300.000 VNĐ',
      image: 'https://firebasestorage.googleapis.com/v0/b/ami-noti.firebasestorage.app/o/bo-beefsteak.png?alt=media&token=d9764b67-e8d7-40cc-b0aa-2f4f11ebe220',
    },
    foodList: [
      {
        'name': 'Thịt bò',
        'title': 'beefsteak',
        'image': 'https://firebasestorage.googleapis.com/v0/b/ami-noti.firebasestorage.app/o/bo-beefsteak.png?alt=media&token=d9764b67-e8d7-40cc-b0aa-2f4f11ebe220',
        'des': 'Beefsteak',
        'price': '150.000 - 300.000 VNĐ',
        'type': '1',
        'id': '2',
        'tag': '["Khoai tây", "Thịt bò"]',
      },
      {
        'name': 'Bò xào',
        'title': 'cải rỗ',
        'image': 'https://firebasestorage.googleapis.com/v0/b/ami-noti.firebasestorage.app/o/bo-xao-cai-ro.png?alt=media&token=5a0ec05f-63b5-45c2-8268-f90d3c739751',
        'des': 'Suted Beef with Chinese broccoli',
        'price': '180.000 - 360.000 VNĐ',
        'type': '1',
        'id': '4',
        'tag': '["Cải rổ", "Thịt bò"]',
      },
      {
        'name': 'Bò Argentina',
        'title': 'số tiêu đen',
        'image': 'https://firebasestorage.googleapis.com/v0/b/ami-noti.firebasestorage.app/o/bo-argentina-sot-tieu-den.png?alt=media&token=79bb8f9b-d6ed-4b98-a64a-b302a5c63b58',
        'des': 'Dipped Argentina beef with black pepper sauce',
        'price': '150.000 - 300.000 VNĐ',
        'type': '1',
        'id': '9',
        'tag': '["Thịt bò", "Tiêu đen"]',
      },
      {
        'name': 'Bò lúc lắc',
        'title': 'khoai tây',
        'image': 'https://firebasestorage.googleapis.com/v0/b/ami-noti.firebasestorage.app/o/bo-luc-lac-khoai-tay.png?alt=media&token=f55fbb9a-b40f-4a80-bbb8-430f0e3894b5',
        'des': 'Beef dish seved fried potato',
        'price': '180.000 - 360.000 VNĐ',
        'type': '1',
        'id': '10',
        'tag': '["Hành tây", "Khoai tây", "Ớt xanh"]',
      },
    ],
  },
  reducers: {
    setTypeID: (state, act) => {
      state.typeID = act.payload.typeID;
    },
    setFoodID: (state, act) => {
      state.foodID = act.payload.foodID;
    },
    setFood: (state, act) => {
      state.food = act.payload.food;
    },
    setFoodList: (state, act) => {
      state.foodList = act.payload.foodList;
    },
  },
});
export const { setTypeID, setFoodID, setFood, setFoodList } = validator.actions;
export default validator.reducer;