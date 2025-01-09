import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import CarouContentBtn from './CarouContentBtn';

const { Title, Paragraph } = Typography;

function CarouContent() {

  const style: React.CSSProperties = {
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  };

  const title1S: React.CSSProperties = {
    fontSize: 40,
  };

  const title2S: React.CSSProperties = {
    fontSize: 60,
  };

  const paraS: React.CSSProperties = {
    fontSize: 25,
    textAlign: 'center',
  };

  return (<>
    <div className="w-100 h-100 py-5" style={style}>
      <div className="container mx-auto my-3 text-center bg-">
        <div className="w-100 mx-auto">
          <Link to={'/'}>
            <img src='/images/logo.webp' className='mb-5'/>
          </Link>
          <Title className='text-white mt-5 pb-0 pt-3 merienda-0' style={title1S}>CHÀO MỪNG ĐẾN VỚI</Title>
          <Title className='text-white my-3 pb-2 pt-0 playfair-sc-regular' style={title2S}>NHÀ HÀNG THỦY TẠ ĐẦM SEN</Title>
          <Paragraph className='text-white playfair-0 mb-4 pb-5' style={paraS}>
            Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen, với 6 sảnh tiệc.
            Có thể đáp ứng nhu cầu lượng khách lớn từ 100 đến 700 khách/sảnh.
            Đặc biệt, nhà hàng Thủy Tạ còn có vị trí tổ chức tiệc ngoài trời tại Quảng trường La Mã (CVVH Đầm Sen), đáp ứng lượng khách lên đến 2000.
            Đây là vị trí lý tưởng để các quý công ty tổ chức đại tiệc cuối năm, hoặc sự kiện, tiệc cưới, sinh nhật...
          </Paragraph>
          <CarouContentBtn />
        </div>
      </div>
    </div>
  </>);
}
export default CarouContent;