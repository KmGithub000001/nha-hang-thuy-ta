import React, { useEffect } from 'react';
import styles from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDishpatch, RootState } from '../Redux/store';
import { fetchMenu } from '../Redux/menuThunk';
import MenuItem from './MenuItem';

function Menu() {
  const dispatch = useDispatch<AppDishpatch>();
  const menu = useSelector((state: RootState) => state.menu.val);
  const ready = useSelector((state: RootState) => state.menu.ready);

  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  const bgS: React.CSSProperties = {
    background: 'url("/images/menu-main-bg.png")',
    minHeight: '100vh',
    backgroundPosition: 'center center',
    backgroundSize: '100% 100%',
    opacity: 0.5,
    backgroundColor: '#ffbb96',
  };
  return (<>
    <div className="container-fluid" style={bgS}>
      <div className="px-5 pb-5" style={{ paddingTop: '15vh' }}>
        <div className='row p-3'>
          <div className="col-12 col-lg-9 bg-primary">

          </div>
          <div className="col-12 col-lg-3 bg-warning">
            <div className={`px-4 ${styles.menuBox}`}>
              <h1 className='text-center py-3 eagle-lake-regular'>Menu</h1>
              <div className="row">
                {
                  ready && menu.map((e, i) => <MenuItem key={`MenuItem_${i}`} {...e} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}
export default Menu;