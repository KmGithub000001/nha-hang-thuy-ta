
import { Link, useLocation } from 'react-router-dom';
import NavDropDown from './NavDropDown';
import { useEffect, useState } from 'react';

const LinkMenu = ({ title, url }) => {
  const location = useLocation();

  const [active, setActive] = useState('');
  useEffect(() => {
    setActive(location.pathname.indexOf(url) === 0 ? 'menuActive' : '');
  }, [location.pathname]);

  return (<>
    <Link to={url}
      className={` menuItem ${active}`}
      aria-current="page"
    >
      {title}
    </Link>
  </>);
};

function NavMenu() {
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
          title: 'Thuyền rồng Kim Long - Hoàng Long',
          url: '/thuyen-rong-kim-long-hoang-long',
        },
        {
          title: 'Sảnh Ngân Sen',
          url: '/sanh-ngan-sen',
        },
        {
          title: 'Sảnh Hoàng Sen - Kim Sen',
          url: '/sanh-hoang-sen-kim-sen',
        },
        {
          title: 'Sảnh Thanh Sen',
          url: '/sanh-thanh-sen',
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

  return (<>
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {
        menu.map((e, i) => (
          <li className="nav-item px-3" key={`NavMenu_li_${i}`}>
            {
              e.childrens !== undefined ? <NavDropDown {...e} /> :
                <LinkMenu {...e} />
            }
          </li>
        ))
      }
    </ul >
  </>);
}
export default NavMenu;