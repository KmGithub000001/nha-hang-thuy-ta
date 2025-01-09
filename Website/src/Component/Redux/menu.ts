import { createSlice } from '@reduxjs/toolkit';
const menu = createSlice({
  name: 'menu',
  initialState: {
    val: [
      {
        type: 'Dồi trường',
        validator: 'doi-truong-hap-hanh-gung.png',
        variants: [
          {
            name: 'Đồi trường',
            title: 'hấp hành gừng',
            image: 'doi-truong-hap-hanh-gung.png',
            des: 'Steamed pig\'s uterine with ginger & scallions',
            tag: ['Dồi trường', 'Gừng', 'Hành lá'],
            price: '150.000 - 300.000 VNĐ',
          },
          {
            name: 'Dồi trường',
            title: 'chiên giòn',
            image: 'doi-truong-chien-gion.png',
            des: 'Fried hog\'s pudding',
            tag: ['Dồi trường'],
            price: '150.000 - 300.000 VNĐ',
          },
          {
            name: 'Dồi trường',
            title: 'rang muối',
            image: 'doi-truong-rang-muoi.png',
            des: 'Roasted pig\'s uterine with salf',
            tag: ['Dồi trường', 'Muóio'],
            price: '150.000 - 300.000 VNĐ',
          },
        ],
      },
      {
        type: 'Bò',
        validator: 'bo-argentina-sot-tieu-den.png',
        variants: [
          {
            name: 'Bò Argentina',
            title: 'số tiêu đen',
            image: 'bo-argentina-sot-tieu-den.png',
            des: 'Dipped Argentina beef with black pepper sauce',
            tag: ['Thịt bò', '  Tiêu đen'],
            price: '150.000 - 300.000 VNĐ',
          },
          {
            name: 'Thịt bò',
            title: 'beefsteak',
            image: 'bo-beefsteak.png',
            des: 'Beefsteak',
            tag: ['Khoai tây', 'Thịt bò'],
            price: '150.000 - 300.000 VNĐ',
          },
          {
            name: 'Bò lúc lắc',
            title: 'khoai tây',
            image: 'bo-luc-lac-khoai-tay.png',
            des: 'Beef dish seved fried potato',
            tag: ['Hành tây', 'Khoai tây', 'Ớt xanh'],
            price: '180.000 - 360.000 VNĐ',
          },
          {
            name: 'Bò xào',
            title: 'cải rỗ',
            image: 'bo-xao-cai-ro.png',
            des: 'Suted Beef with Chinese broccoli',
            tag: ['Cải rổ', 'Thịt bò'],
            price: '180.000 - 360.000 VNĐ',
          },
        ],
      },
      {
        type: 'Chả giò',
        validator: 'cha-gio-ca-that-lat-thia-la.png',
        variants: [
          {
            name: 'Chả giò cá',
            title: 'thát lát thìa là',
            image: 'cha-gio-ca-that-lat-thia-la.png',
            des: 'Spring rolls Bronze featherback & dills',
            tag: ['Cá thát lát', 'Rau thìa là'],
            price: '150.000 - 300.000 VNĐ',
          },
          {
            name: 'Chả giò',
            title: 'cocktail',
            image: 'cha-gio-cocktail.png',
            des: 'Cocktail Spring rolls',
            tag: ['Khoai tây', 'Thịt bò'],
            price: '150.000 - 300.000 VNĐ',
          },
          {
            name: 'Chả giò rế',
            title: 'tôm cua',
            image: 'cha-gio-re-tom-cua.png',
            des: 'Shrimp & crab spring rools trivet',
            tag: ['Cua', 'Tôm'],
            price: '150.000 - 300.000 VNĐ',
          },
          {
            name: 'Chả giò',
            title: 'tôm',
            image: 'cha-gio-tom.png',
            des: 'Sauted Beef with Chinese broccoli',
            tag: ['Tôm'],
            price: '150.000 - 300.000 VNĐ',
          },
        ],
      },
      {
        type: 'Gỏi',
        validator: 'goi-tom.png',
        variants: [
          {
            name: 'Gỏi',
            title: 'tôm',
            image: 'goi-tom.png',
            des: 'Gỏi tôm',
            tag: ['Gỏi', 'Tôm'],
            price: '150.000 - 300.000 VNĐ',
          },
        ],
      },
      {
        type: 'Chim bồ câu',
        validator: 'chim-bo-cau.png',
        variants: [
          {
            name: 'Chim',
            title: 'bồ câu',
            image: 'chim-bo-cau.png',
            des: 'Chim bồ câu',
            tag: ['Chim bồ câu'],
            price: '150.000 - 300.000 VNĐ',
          },
        ],
      },
      {
        type: 'Đậu hũ',
        validator: 'dau-hu.png',
        variants: [
          {
            name: 'Đậu hũ',
            title: 'đậu hũ',
            image: 'dau-hu.png',
            des: 'Đậu hũ',
            tag: ['Đậu hũ'],
            price: '150.000 - 300.000 VNĐ',
          },
        ],
      },
      {
        type: 'Gà',
        validator: 'ga-chien.png',
        variants: [
          {
            name: 'Gà',
            title: 'Chiên',
            image: 'ga-chien.png',
            des: 'Gà chiên',
            tag: ['Gà', 'Chiên'],
            price: '150.000 - 300.000 VNĐ',
          },
        ],
      },
    ],
  },
  reducers: {

  },
});
export const { } = menu.actions;
export default menu.reducer;