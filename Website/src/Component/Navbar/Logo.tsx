import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../Redux/store';


function Logo() {
  const logoImg = useSelector((state: RootState) => state.image.logo);
  return (<>
    <Link to={'/'} className='navbar-brand logo'>
      <div className="row">
        <div className="col-3">
          <img src={logoImg} className='w-100' />
        </div>
        <div className="col-9">
          <h3 className='navbar-text my-0 py-1 navbar_logo_text'>Nhà hàng</h3>
          <h2 className='navbar-text my-0 py-1 navbar_logo_text'>THỦY TẠ ĐẦM SEN</h2>
        </div>
      </div>
    </Link>
  </>);
}
export default Logo;  