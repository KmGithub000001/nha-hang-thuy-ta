import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function MenuItem(prop) {
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
    <li className='nav-item' >
      <Link to={prop.url}
        className={`nav-link navbar-text mx-3 navbar_menu_text ${active}`}
        aria-current='page'
      >
        {prop.name}
      </Link>
    </li>
  </>);
}
export default MenuItem;