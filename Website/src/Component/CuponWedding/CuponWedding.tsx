
import HeaderBG from '../HeaderBackground/HeaderBG';
import WeddingGift from './WeddingGift';
import styles from './style.module.css';

function CuponWedding() {

  const bg = {
    title: 'KHUYẾN MÃI TIỆC CƯỚI',
    img: '/images/header-bg-1.jpg',
  };

  return (<>
    <HeaderBG {...bg} />
    <div className="container py-5">
      <img src='/images/cupon-wedding-bg.png' className='w-100' />
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