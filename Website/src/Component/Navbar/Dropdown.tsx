import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  id: number;
  idparent: number;
  name: string;
  url: string;
  children?: Props[];
}

function NavBarDropdown(prop: Props) {
  const [show, setShow] = useState('dropdown-menu');

  const [active, setActive] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.indexOf(prop.url) === 0) {
      setActive('active');
    } else {
      setActive('');
    }
  }, [location]);

  return (<>
    <li className='nav-item dropdown'
      onMouseEnter={() => setShow('dropdown-menu show')}
      onMouseLeave={() => setShow('dropdown-menu')}
    >
      <a className={`nav-link dropdown-toggle navbar-text mx-3 navbar_menu_text ${active}`}
        href='#'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {prop.name}
      </a>
      <ul className={`py-0 ${show}`}>
        {
          prop.children?.map((e, i) => <li key={`NavBarDropdown_item_${i}`}>
            <Link
              className='dropdown-item navbar_dropdown_item py-3'
              to={'/sanh-tiec' + e.url}
            >
              {e.name}
            </Link>
          </li>)
        }
      </ul>
    </li>
  </>);
}

export default NavBarDropdown;