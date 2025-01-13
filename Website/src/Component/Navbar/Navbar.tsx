
import { Link, useLocation } from 'react-router-dom';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavSearchBox from './NavSearchBox';
import { useEffect, useState } from 'react';

function Navbar() {
  const [bg, setBg] = useState('none');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setBg('#d46b08');
      } else {
        setBg('none');
      }
    });
  }, []);

  return (<>
    <nav className='navbar fixed-top navbar-expand-lg' style={{ background: bg }}>
      <div className="container-fluid px-5">
        <Link to={'/trang-chu'} className="navbar-brand">
          <NavLogo />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavMenu />
          <NavSearchBox />
        </div>
      </div>
    </nav>
  </>);
}
export default Navbar;