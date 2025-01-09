import { ConfigProvider, List, Typography, TypographyProps } from 'antd';
import styles from './style.module.css';


const { Title, Text } = Typography;

function SystemList() {
  const data = [
    'Công ty CP DVDL Phú Thọ',
    'Khu du lịch sinh thái Vàm Sát',
    'Khách sạn Ngọc Lan',
    'Khách sạn Phú Thọ',
    'Trung tâm Du Lịch Đầm Sen',
  ];
  const listC = {
    itemPadding: '0px',
  };
  return (<>
    <ConfigProvider theme={{
      components: {
        List: listC,
      },
    }}
    >
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<i className="fa-solid fa-circle" style={{ color: '#ffffff' }}></i>}
              title={<Text className={styles.text}>{item}</Text>}
            />
          </List.Item>
        )}
      />
    </ConfigProvider>
  </>);
}
export default SystemList;