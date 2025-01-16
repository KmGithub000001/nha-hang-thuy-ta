import { Col, ConfigProvider, Image, Row, Typography } from 'antd';
import HeaderBG from '../HeaderBackground/HeaderBG';
import MoreLoby from './MoreLoby';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

const { Text } = Typography;

function Loby1() {
  const headerBackground = useSelector((state: RootState) => state.image.headerBG[0]);
  const images = useSelector((state: RootState) => state.image.loby1);

  const bg = {
    text: 'THUYỀN RỒNG',
    title: 'KIM LONG - HOÀNG LONG',
    img: headerBackground,
  };

  return (<>
    <HeaderBG {...bg} />
    <div className="container py-5">
      <img src={images[0]} className='w-100 mb-5' />
      <h5 className=" mb-3" style={{ textAlign: 'justify' }}>
        Điểm đập vào mắt du khách khi đến tham công viên văn hóa Đầm Sen,
        là hai chiếc thuyền rồng ngạo nghễ rướn thân mình hưởng ra giữa lòng hồ.
        Đây là hai sảnh của nhà hàng Thủy Tạ Đầm Sen có tên gọi Kim Long và Hoàng Long.
      </h5>
      <p className="mb-3 ps-2 py-2" style={{
        borderLeft: '5px solid #fa8c16',
        textAlign: 'justify',
        color: '#fa8c16',
        fontSize: 17,
      }}>
        Nếu bạn có nhu cầu tiếp từ 140 đến 180 khách,
        thì hai sảnh thuyền rồng (Kim Long và Hoàng Long) là lựa chọn số 1 dành cho bạn.
      </p>
      <p className=" mb-3" style={{
        textAlign: 'justify',
        fontSize: 18,
      }}>
        Ngoài ra, 2 chiếc thuyền rồng cũng tượng trưng cho 2 búp sen điểm tô bên cánh hoa Thanh Sen, hướng ra hồ.
        Thông thường, các thực khách riêng lẻ và gia đình thường chọn hai sảnh thuyền rồng này làm tiệc sinh nhật gia đình,
        gặp gỡ bạn bè, hoặc tiếp khách ngoại giao.
        Đây cũng là vị trí đẹp để du khách có thể xem bắn pháo hoa tại Công viên văn hóa Đầm Sen vào những dịp lễ lớn.
      </p>
      <Row gutter={10}>
        <Col lg={16} className='mb-2'>
          <Image src={images[1]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
        <Col lg={8}>
          <Row gutter={10}>
            <Col className='mb-2' span={24}>
              <Image src={images[2]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
            <Col className='mb-2' span={24}>
              <Image src={images[3]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
            </Col>
          </Row>
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
        <Col lg={16} className='mb-2'>
          <Image src={images[6]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
      </Row>
      <MoreLoby curID={1} />
    </div>
  </>);
}
export default Loby1;