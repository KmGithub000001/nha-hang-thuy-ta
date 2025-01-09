
import HeaderBG from '../HeaderBackground/HeaderBG';
import { ConfigProvider, Typography } from 'antd';
import styles from './style.module.css';
import RoomPrice from './RoomPrice';

const { Text, Title } = Typography;

function WorkshopRoom() {
  const bg = {
    title: 'PHÒNG HỘI NGHỊ',
    img: '/images/header-bg-1.jpg',
  };
  return (<>
    <HeaderBG {...bg} />
    <div className="container py-5">
      <img src="/images/workshop-img.png" className='w-100 mb-3' />
      <ConfigProvider theme={{
        components: {
          Typography: {
            titleMarginBottom: '0.1em',
          },
        },
        token: {
          colorText: '#fa8c16',
        },
      }} >
        <Title level={1} >Giá cho thuê phòng hội nghị</Title>
      </ConfigProvider>
      <ConfigProvider theme={{
        components: {
          Typography: {
            titleMarginTop: 10,
          },
        },
        token:{
          colorText: '#8c8c8c',
        },
      }} >
        <Title className='mb-3' level={4}>(Đã bao gồm 10% thuế VAT)</Title>
      </ConfigProvider>
      <RoomPrice />
    </div>
  </>);
}
export default WorkshopRoom;