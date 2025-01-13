
import { Col, Row, Typography } from 'antd';
import styles from './style.module.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
const { Text, Title } = Typography;
function NavLogo() {

  return (<>
    <table>
      <tr>
        <td>
          <img src="/images/logo.webp" alt="" />
        </td>
        <td className='ps-3'>
          <Text className={`menuItem ${styles.textLogo}`}>Nhà hàng</Text><br />
          <Text className={`menuItem mt-1 ${styles.titleLogo}`}>THỦY TẠ ĐẦM SEN</Text>
        </td>
      </tr>
    </table>
  </>);
}
export default NavLogo;