import { Col, ConfigProvider, Image, Row, Typography } from 'antd';
import HeaderBG from '../HeaderBackground/HeaderBG';
import MoreLoby from './MoreLoby';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

function Loby3() {
  const headerBackground = useSelector((state: RootState) => state.image.headerBG[2]);
  const images = useSelector((state: RootState) => state.image.loby3);

  const bg = {
    text: 'SẢNH',
    title: 'HOÀNG SEN - KIM SEN',
    img: headerBackground,
  };

  return (<>
    <HeaderBG {...bg} />
    <div className="container py-5">
      <img src={images[0]} className='w-100 mb-5' />
      <h5 className=" mb-3" style={{ textAlign: 'justify' }}>
        Là sảnh kết hợp của 2 sảnh nhỏ là Hoàng Sen và Kim Sen.
        Với sảnh Kim Sen có thể tổ chức 28 bàn (trên dưới 250 khách).
        Còn với sảnh Hoàng Sen có thể đáp ứng 50 bàn (trên dưới 500 người).
      </h5>
      <Row gutter={10} >
        <Col lg={12} className='mb-2'>
          <Image src={images[1]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
        <Col lg={12} className='mb-2'>
          <Image src={images[2]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
      </Row>
      <p className=" mb-3" style={{
        textAlign: 'justify',
        fontSize: 18,
      }}>
        Sảnh nằm ngay lối vào của cổng số 2 Đầm Sen, có thiết kế Châu Âu sang trọng đẳng cấp.
        Khi gộp cả Hoàng Sen và Kim Sen để thành Hoàng Kim sen, có thể đáp ứng lượng khách trên dưới 750 người.
        tương đương 78 bàn.
      </p>
      <p className="mb-3 ps-2 py-2" style={{
        borderLeft: '5px solid #fa8c16',
        textAlign: 'justify',
        color: '#fa8c16',
        fontSize: 17,
      }}>
        Nếu bạn cần tiếp khoảng 78 bàn (750), hãy chọn sảnh Hoàng Kim Sen nhà hàng Thủy Tạ Đầm Sen.
        Đồng thời có thể chia thành 2 sảnh nhỏ là Hoàng Sen và Kim Sen.
      </p>
      <p className=" mb-3" style={{
        textAlign: 'justify',
        fontSize: 18,
      }}>
        Mặc dù diện tích lớn, nhưng thiết kế của sảnh Hoàng Kim Sen hoàn toàn không có cột nhà giữa sảnh.
        (Điều mà nhiều kiến trúc khác thường mắc phải, hạn chế quan sát, chụp ảnh và ghi hình sự kiện).
        Đồng thời các kỹ sư của Phuthotourist đã khéo léo thiết kế khung trần sang trọng.
        Đèn trang trí màu vàng, khiến thực khách luôn cảm thấy không gian ấm cúng.
        Đồng thời, sân khấu được thiết kế phong cách La Mã, lung linh với đèn led hiện đại phù hợp cho những đôi uyên ương ra mắt hai họ.
      </p>
      <Row gutter={10}>
        <Col lg={16} className='mb-2'>
          <Image src={images[3]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
        <Col lg={8}>
          <Row gutter={10}>
            <Col className='mb-2' span={24}>
              <Image src={images[4]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
            <Col className='mb-2' span={24}>
              <Image src={images[5]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
          </Row>
        </Col>
        <Col lg={24} className='mb-2'>
          <Image src={images[6]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
      </Row>
      <h4 className=" mb-3 text-center" style={{ color: '#fa8c16' }}>
        Sảnh Hoàng Sen
      </h4>
      <Row gutter={10}>
        <Col lg={16} className='mb-2'>
          <Image src={images[7]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
        <Col lg={8}>
          <Row gutter={10}>
            <Col className='mb-2' span={24}>
              <Image src={images[8]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
            <Col className='mb-2' span={24}>
              <Image src={images[9]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
          </Row>
        </Col>
        <Col lg={24} className='mb-2'>
          <Image src={images[10]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
      </Row>
      <h4 className=" mb-3 text-center" style={{ color: '#fa8c16' }}>
        Sảnh Kim Sen
      </h4>


      <MoreLoby curID={3} />
    </div>
  </>);
}
export default Loby3;