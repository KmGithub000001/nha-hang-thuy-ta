import { Col, ConfigProvider, Image, Row, Typography } from 'antd';
import HeaderBG from '../HeaderBackground/HeaderBG';
import MoreLoby from './MoreLoby';

const { Text } = Typography;

function Loby1() {
  const bg = {
    text: 'THUYỀN RỒNG',
    title: 'KIM LONG - HOÀNG LONG',
    img: '/images/header-bg-1.jpg',
  };
  return (<>
    <HeaderBG {...bg} />
    <div className="container py-5">
      <img src="/images/loby-1-01.png" className='w-100 mb-5' />
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
          <Image src='/images/loby-1-02.png' width={'100%'} />
        </Col>
        <Col lg={8}>
          <Row gutter={10}>
            <Col className='mb-2' span={24}>
              <Image src='/images/loby-1-03.png' width={'100%'} />
            </Col>
            <Col className='mb-2' span={24}>
              <Image src='/images/loby-1-04.png' width={'100%'} />
            </Col>
          </Row>
        </Col>
        <Col lg={8}>
          <Row gutter={10}>
            <Col className='mb-2' span={24}>
              <Image src='/images/loby-1-05.png' width={'100%'} />
            </Col>
            <Col className='mb-2' span={24}>
              <Image src='/images/loby-1-06.png' width={'100%'} />
            </Col>
          </Row>
        </Col>

        <Col lg={16} className='mb-2'>
          <Image src='/images/loby-1-07.png' width={'100%'} />
        </Col>
      </Row>
      <MoreLoby curID={1} />
    </div>
  </>);
}
export default Loby1;