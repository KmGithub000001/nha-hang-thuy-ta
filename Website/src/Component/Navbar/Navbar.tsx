
import { useEffect, useState } from 'react';
import { fetchMenu } from '../Redux/menu';

import NavbarStyle from './Style';
import Logo from './Logo';
import NavBarMenu from './Menu';
import { useDispatch } from 'react-redux';
import { AppDishpatch } from '../Redux/store';


function Navbar() {
  const dispatch = useDispatch<AppDishpatch>();
  const [bg, setBG] = useState('none');

  useEffect(() => {
    dispatch(fetchMenu());
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBG('#fa8c16');
      } else {
        setBG('none');
      }
    });
  }, []);

  return (<>
    <NavbarStyle />
    <nav className='navbar navbar-expand-xl fixed-top' style={{ background: bg }}>
      <div className='container-fluid px-4'>
        <Logo />
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavBarMenu />
          <form className="d-flex search_box" role="search">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder='Tìm kiếm'/>
              <span className="input-group-text" id="basic-addon2">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </form>
        </div>
      </div>
    </nav>

  </>);
}
export default Navbar;