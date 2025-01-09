import { ConfigProvider, Input, Space } from 'antd';
import type { GetProps } from 'antd';
import styles from './style.module.css';
type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

function NavSearchBox() {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  return (<>
    <ConfigProvider theme={{
      token: {

      },
      components: {
        Input: {

        },
      },
    }} >
      <Space direction="vertical">
        <Search placeholder="Tìm kiếm" onSearch={onSearch} className={styles.search} />
      </Space>
    </ConfigProvider>
  </>);
}
export default NavSearchBox;