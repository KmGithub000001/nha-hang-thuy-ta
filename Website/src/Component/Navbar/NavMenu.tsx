import { Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import NavDropDown from './NavDropDown';
import styles from './style.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './color';
const { Text } = Typography;

function NavMenu() {
  const location = useLocation();
  const color = useSelector((state: RootState) => state.color.text);

  const menu = [
    {
      title: 'Thực đơn',
      url: '/thuc-don',
    },
    {
      title: 'Sảnh tiệc',
      url: '/sanh-tiec',
      childrens: [
        {
          title: 'Thuyển rồng Kim Long - Hoàng Long',
          url: '/thuyen-rong-kim-long-hoang-long',
        },
        {
          title: 'Sảnh Ngân Sen',
          url: '/sanh-ngan-sen',
        },
        {
          title: 'Sảnh Hoàng Sen - Kim Sen',
          url: 'sanh-hoang-sen-kim-sen',
        },
        {
          title: 'Sảnh Thanh Sen',
          url: 'sanh-thanh-sen',
        },
      ],
    },
    {
      title: 'Phòng hội nghị',
      url: '/phong-hoi-nghi',
    },
    {
      title: 'Khuyến mãi tiệc cưới',
      url: '/khuyen-mai-tiec-cuoi',
    },
  ];

  const [curentUrl, setCurentUrl] = useState('');
  useEffect(() => {
    setCurentUrl('/' + location.pathname.split('/')[1]);
    console.log(color);
  }, [location]);


  return (<>
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {
        menu.map((e, i) => (
          <li className="nav-item px-3" key={`NavMenu_li_${i}`}>
            {
              e.childrens !== undefined ? <NavDropDown {...e} /> :
                <Link to={e.url}
                  className={`nav-link px-3 ${styles.hover} ${styles.menuItem} `}
                  style={curentUrl === e.url ? { color: '#fa541c' } : {}}
                  aria-current="page"
                >
                  {e.title}
                </Link>
            }
          </li>
        ))
      }
    </ul >
  </>);
}
export default NavMenu;