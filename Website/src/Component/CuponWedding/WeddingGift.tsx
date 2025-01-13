import styles from './style.module.css';
function WeddingGift() {
  const data = [
    'Liễn hồng, bút ký tên, kệ ảnh, thúng hỷ',
    'Tháp ly, 2 chai Champagne, đá khói',
    'Khăn ăn, hoa tươi để bàn, khăn lạnh',
    'Ban nhạc hòa tấu (2 nhạc công)',
    'Thức ăn nhẹ đầu giờ Cô Dâu Chú Rể',
    'Đậu phộng đầu giờ',
    'Nước ngọt, nước suối suốt tiệc (phục vụ rót bình)',
    'MC tiếng Việt đầu giờ',
    'Thiệp cưới theo mẫu (chưa in nội dung)',
    'Pháo kim tuyến (4 viên)',
    'Bánh cưới 4 giả 1 thật',
    'Thiệp cưới theo mẫu (có in nội dung)',
    'Saxo + 2 Ca sĩ',
    'Máy chiếu Album hoặc màn hình Led',
    'Đội múa khai tiệc',
    'Máy quay trực tiếp',
    'Bàn ăn gia đình',
    'Giảm giá chương trình nghi lễ đặc biệt',
  ];

  return (<>
    <table className="table table-bordered my-5">
      <thead className="text-center">
        <tr>
          <th className={`py-3 ${styles.tableHead}`} style={{ background: '#ffe7ba' }} rowSpan={2}>Quà tặng</th>
          <th className={`py-3 ${styles.tableHead}`} style={{ background: '#ffd591' }} colSpan={6}>Số bàn đặt chính thức</th>
        </tr>
        <tr>
          <th className={`py-3 ${styles.tableHead}`} style={{ background: '#ffe7ba' }} >15-20</th>
          <th className={`py-3 ${styles.tableHead}`} style={{ background: '#ffe7ba' }} >21-26</th>
          <th className={`py-3 ${styles.tableHead}`} style={{ background: '#ffe7ba' }} >27-32</th>
          <th className={`py-3 ${styles.tableHead}`} style={{ background: '#ffe7ba' }} >33-42</th>
          <th className={`py-3 ${styles.tableHead}`} style={{ background: '#ffe7ba' }} >43-50</th>
          <th className={`py-3 ${styles.tableHead}`} style={{ background: '#ffe7ba' }} >51-65</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e) => <tr>
            <td className={`py-3 ${styles.tableHead}`} style={{ maxWidth: '150px' }}>{e}</td>
            <td className={`py-3 ${styles.tableHead}`} ></td>
            <td className={`py-3 ${styles.tableHead}`} ></td>
            <td className={`py-3 ${styles.tableHead}`} ></td>
            <td className={`py-3 ${styles.tableHead}`} ></td>
            <td className={`py-3 ${styles.tableHead}`} ></td>
            <td className={`py-3 ${styles.tableHead}`} ></td>
          </tr>)
        }
      </tbody>
    </table>
  </>);
}
export default WeddingGift;