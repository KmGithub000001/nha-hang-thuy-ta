
import HeaderBG from '../HeaderBackground/HeaderBG';
import { ConfigProvider, Typography } from 'antd';
import RoomPrice from './RoomPrice';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

const { Text, Title } = Typography;

function WorkshopRoom() {
  const headerBackground = useSelector((state:RootState) => state.image.headerBG[0]);
  const workshop1 = useSelector((state:RootState) => state.image.workshop1);

  const bg = {
    title: 'PHÒNG HỘI NGHỊ',
    img: headerBackground,
  };
  return (<>
    <HeaderBG {...bg} />
    <div className="container py-5">
      <img src={workshop1} className='w-100 mb-3' />
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