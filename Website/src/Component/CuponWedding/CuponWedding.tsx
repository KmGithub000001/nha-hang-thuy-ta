
import { useSelector } from 'react-redux';
import HeaderBG from '../HeaderBackground/HeaderBG';
import WeddingGift from './WeddingGift';
import styles from './style.module.css';
import { RootState } from '../Redux/store';

function CuponWedding() {
  const headeBackround = useSelector((state:RootState) => state.image.headerBG[0]);
  const cuponWedding1 = useSelector((state:RootState) => state.image.cuponWedding1);

  const bg = {
    title: 'KHUYẾN MÃI TIỆC CƯỚI',
    img: headeBackround,
  };

  return (<>
    <HeaderBG {...bg} />
    <div className="container py-5">
      <img src={cuponWedding1} className='w-100' />
      <WeddingGift />
      <ul>
        <li className={styles.list}>Quý khách vào dự tiệc tại nhà Thuỷ Tạ Đầm Sen được tham quan Công Viên Đầm Sen Miễn Phí trong ngày.</li>
        <li className={styles.list}>Chương trình khuyến mãi chỉ áp dụng trên số bàn tiệc chinh thức đã thoả thuận trong hợp đồng (không áp dụng cho bàn dự phòng và bản phát sinh trong buổi tiệc).</li>
        <li className={styles.list}>Chương trình khuyến mãi không quy đổi thành tiền hoặc chương trình khác.</li>
      </ul>
    </div>
  </>);
}
export default CuponWedding;