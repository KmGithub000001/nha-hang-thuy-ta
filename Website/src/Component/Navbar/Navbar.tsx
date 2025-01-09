
import { Link, useLocation } from 'react-router-dom';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavSearchBox from './NavSearchBox';
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { change } from './color';
import colorStore from './color';

function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(change({
      color: location.pathname === '/thuc-don' ? 'black' : 'white',
    }));
    
  }, [location]);

  return (<>
    <Provider store={colorStore}>
      <nav className="navbar fixed-top navbar-expand-lg bg-none">
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
    </Provider>
  </>);
}
export default Navbar;