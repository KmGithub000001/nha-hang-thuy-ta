import React from 'react';
import styles from './style.module.css';
import { Col, Image, Row } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
function Menu() {

  const menu = useSelector((state: RootState) => state.menu.val);

  const bgS: React.CSSProperties = {
    background: 'url("/images/menu-main-bg.png")',
    height: '100vh',
    backgroundPosition: 'center center',
    backgroundSize: '100% 100%',
    opacity: 0.5,
    backgroundColor: '#ffbb96',
  };
  return (<>
    <div className="container-fluid" style={bgS}>
      <div className="container">
        <Row>
          <Col lg={18}>
            <Row>
              <Col lg={10}>
                <Image src='' />
              </Col>
              <Col lg={14}>

              </Col>
            </Row>
          </Col>
          <Col lg={6}>

          </Col>
        </Row>
      </div>
    </div>
  </>);
}
export default Menu;