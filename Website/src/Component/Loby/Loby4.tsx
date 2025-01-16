import { Col, ConfigProvider, Image, Row, Typography } from 'antd';
import HeaderBG from '../HeaderBackground/HeaderBG';
import MoreLoby from './MoreLoby';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

function Loby4() {
  const headerBackground = useSelector((state: RootState) => state.image.headerBG[1]);
  const images = useSelector((state: RootState) => state.image.loby4);

  const bg = {
    text: 'SẢNH',
    title: 'THANH SEN',
    img: headerBackground,
  };

  return (<>
    <HeaderBG {...bg} />
    <div className="container py-5">
      <img src={images[0]} className='w-100 mb-5' />
      <h5 className=" mb-3" style={{ textAlign: 'justify' }}>
        Là sảnh đẹp nhất với không gian mở hướng ra hồ bán nguyệt của CVVH Đầm Sen.
        Với diện tích 862m2, sảnh Thanh Sen có thể tiếp 62 bàn (khoảng 750 khách).
      </h5>
      <p className=" mb-3" style={{
        textAlign: 'justify',
        fontSize: 18,
      }}>
        Khác với các sảnh khác, sảnh Thanh Sen có hình cánh cung.
        Nếu như sảnh Ngân Sen được ví như đài sen, thì sảnh Thanh Sen lại xem như cánh sen hướng ra mặt hồ.
        Và điểm tô cho “cánh sen" là hai thuyền rồng tượng trưng những búp sen nhô lên lao.
        Với kiến trúc hình cong, nên không gian bên trong sảnh cũng được thiết kế theo hình cong từ cầu thang cho đến lối vào.
        Và cả sân khấu cũng được thiết kế hoành tráng bằng hình cong.
      </p>
      <Row gutter={10} >
        <Col lg={16} className='mb-2'>
          <Image src={images[1]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
        <Col lg={8} className='mb-2'>
          <Row gutter={10}>
            <Col span={24} className='mb-2'>
              <Image src={images[2]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
            <Col span={24}>
              <Image src={images[3]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
          </Row>
        </Col>
        <Col lg={24} className='mb-2'>
          <Image src={images[4]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
      </Row>
      <h1 className='playball-regular' style={{ color: '#fa8c16' }}>RƯỚC DÂU BẰNG THUYỀN HOA</h1>
      <p className=" mb-3" style={{
        textAlign: 'justify',
        fontSize: 18,
      }}>Khác với các sảnh khác, sảnh Thanh Sen có hình cánh cung.
        Nếu như sảnh Ngân Sen được ví như đài sen, thì sảnh Thanh Sen lại xem như cánh sen hưởng ra mặt hồ.
        Và điểm tô cho “cánh sen" là hai thuyền rồng tượng trưng những búp sen nhô lên lao.
        Với kiến trúc hình cong, nên không gian bên trong sảnh cũng được thiết kế theo hình cong từ cầu thang cho đến lối vào.
        Và cả sân khấu cũng được thiết kế hoành tráng bằng hình cong.
      </p>
      <Row gutter={10} >
        <Col lg={16} className='mb-2'>
          <Image src={images[5]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
        <Col lg={8} className='mb-2'>
          <Row gutter={10}>
            <Col span={24} className='mb-2'>
              <Image src={images[6]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
            <Col span={24}>
              <Image src={images[7]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
          </Row>
        </Col>
        <Col lg={12} className='mb-2'>
          <Image src={images[8]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
        <Col lg={12} className='mb-2'>
          <Image src={images[9]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
      </Row>
      <h1 className='playball-regular' style={{ color: '#fa8c16' }}>SÂN KHÂU RÈM NƯỚC</h1>
      <p className=" mb-3" style={{
        textAlign: 'justify',
        fontSize: 18,
      }}>
        Bên cạnh đó, sân khấu chính của sảnh cũng được thiết kế như sân khấu ca nhạc.
        Mục đích đáp ứng mọi nhu cầu tổ chức sự kiện.
        Đặc biệt sân khấu này còn có hệ thống “rèm nước".
        Khi diễn ra nghi thức, chiếm rèm nước trở nên sống động và lung linh.
        Tạo nên sự huyền diệu cho các đôi trong lễ thành hôn của mình.
      </p>
      <Row gutter={11} >
        <Col lg={16} className='mb-2'>
          <Image src={images[10]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
        <Col lg={8} className='mb-2'>
          <Row gutter={10}>
            <Col span={24} className='mb-2'>
              <Image src={images[11]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
            <Col span={24}>
              <Image src={images[12]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
          </Row>
        </Col>
        <Col lg={24} className='mb-2'>
          <Image src={images[13]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
      </Row>

      <MoreLoby curID={4} />
    </div>
  </>);
}
export default Loby4;