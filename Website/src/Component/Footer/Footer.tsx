
import { Col, Row, Typography } from 'antd';
import styles from './style.module.css';
import SystemList from './SystemList';

const { Text, Title } = Typography;

function Footer() {

  const bodyS = {
    background: 'url("/images/footer-bg.png")',
  };

  return (<>
    <div className={` ${styles.footerBody}`} style={bodyS}>
      <Row className='container py-5'>
        <Col lg={12}>
          <Row className='mb-5'>
            <Col lg={6}>
              <img className='w-75' src='/images/logo.webp' />
            </Col>
            <Col lg={18}>
              <Row className='mb-3'>
                <Col lg={24}>
                  <Text className={styles.title}>Liên hệ</Text>
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col className='text-white' span={3}><i className="fa-solid fa-location-dot fa-xl"></i></Col>
                <Col className={styles.text} span={21}>03 Hòa Bình, Phường 3, Quận 11, TP.Hồ Chí Minh<br />(Cổng số 2 Công viên Văn hóa Đầm Sen)</Col>
              </Row>
              <Row className='mb-3'>
                <Col className='text-white' span={3}><i className="fa-solid fa-phone fa-xl"></i></Col>
                <Col className={styles.text} span={21}>028 3961 2082 - 028 3858 6763</Col>
              </Row>
            </Col>
          </Row>
          <Text className={styles.text}>Copyright @ Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</Text>
        </Col>
        <Col lg={12}>
          <div className="mb-3">
            <Text className={styles.title}>Các đơn vị cùng hệ thống<br />Phuthotourist</Text>
          </div>
          <SystemList />
        </Col>
      </Row>
    </div>
  </>);
}
export default Footer;