import { Col, ConfigProvider, Image, Row, Typography } from 'antd';
import HeaderBG from '../HeaderBackground/HeaderBG';
import MoreLoby from './MoreLoby';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import React from 'react';

function Loby2() {
  const headerBackground = useSelector((state: RootState) => state.image.headerBG[1]);
  const images = useSelector((state: RootState) => state.image.loby2);

  const bg = {
    text: 'SẢNH',
    title: 'NGÂN SEN',
    img: headerBackground,
  };

  return (<>
    <HeaderBG {...bg} />
    <div className="container py-5">
      <img src={images[0]} className='w-100 mb-5' />
      <h5 className=" mb-3" style={{ textAlign: 'justify' }}>
        Nếu bạn có nhu cầu tiếp 500 khách, thì sảnh Ngân Sen là lựa chọn hợp lý.
        Sức chứa của sảnh có thể xếp 37 bàn cho một sự kiện.
      </h5>
      <p className=" mb-3" style={{
        textAlign: 'justify',
        fontSize: 18,
      }}>
        Ngân Sen là một khu tiệc của nhà hàng Thủy Tạ thuộc Công viên văn hóa Đầm Sen (do Phuthotourist quản lý) .
        Đa số thực khách bước vào nhà hàng đều cho rằng đây là sảnh chính.
        Bởi vị trí của nó nằm trực diện cổng số 2 CVVH Đầm Sen.
        Điều này không sai, bởi theo kiến trúc, thì sảnh này là vị trí của đài sen nếu nhìn từ trên cao.
        Còn sảnh Thanh Sen sẽ là cánh hoa tỏa ra trên mặt hồ.
      </p>
      <p className=" mb-3" style={{
        textAlign: 'justify',
        fontSize: 18,
      }}>
        Với kiến trúc hình tròn, rộng 402m2, sảnh được trang trí theo phong cách cung đình.
        Sảnh có một tầng lửng, giúp cho việc ghi hình sự kiện có thêm nhiều góc cạnh khác nhau.
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
        <Col lg={8} className='mb-2'>
          <Image src={images[7]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
        <Col lg={8} className='mb-2'>
          <Image src={images[8]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
        <Col lg={8} className='mb-2'>
          <Image src={images[9]} width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} />
        </Col>
      </Row>
      <MoreLoby curID={2} />
    </div>
  </>);
}
export default Loby2;