import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDishpatch, RootState } from '../Redux/store';
import MenuItem from './MenuItem';
import FoodCarousel from './FoodCarousel';
import ImgCarousel from './ImgCarousel';

function Menu() {
  const menu = useSelector((state: RootState) => state.food.val);
  const ready = useSelector((state: RootState) => state.food.ready);
  const food = useSelector((state: RootState) => state.validator.food);

  const roundS: React.CSSProperties = {
    background: '#d9d9d9',
    position: 'absolute',
    zIndex: 1,
    top: '-80vh',
    left: '-50vh',
    borderRadius: '100%',
    border: '190px solid #ff9c6e',
    width: '150vh',
    height: '150vh',
  };
  const contentS: React.CSSProperties = {
    paddingTop: '15vh',
    position: 'absolute',
    zIndex: 2,
    top: '0px',
    left: '0px',
  };

  return (<>
    <div className="container-fluid bg-thuc-don" >
      <div style={roundS}></div>

      <div className="px-5 pb-5 container-fluid" style={contentS}>
        <div className='row'>
          <div className="col-12 col-xxl-9 col-xl-8 mb-5">
            <div className="row mb-3">
              <div className="col-xxl-5 col-lg-6 text-center" style={{ height: '500px', position: 'relative' }}>
                <ImgCarousel />
              </div>
              <div className="col-xxl-7 col-lg-6 ">
                <h1 className='fw-bold'>
                  {food.name}
                </h1>
                <h1 className='w-auto yeseva-one-regular' style={{
                  fontSize: '80px',
                  borderBottom: '2px solid #d46b08',
                  color: '#d46b08',
                  display: 'inline-block',
                }}>
                  {food.title}
                </h1>
                <p className='my-3' style={{
                  fontSize: '25px',
                }}>
                  {food.des}
                </p>
                <div >{
                  JSON.parse(food.tag)
                    .map((e, i) => <a className='btn px-4 py-1 me-2 mb-2' style={{
                      background: '#ffc069',
                      fontSize: '20px',
                      color: 'white',
                    }}>{e}</a>)
                }</div>
                <h1 className='my-3 fw-bold' style={{
                  color: '#d46b08',
                }}>
                  {food.price}
                </h1>
              </div>
            </div>
            <FoodCarousel />
          </div>
          <div className="col-12 col-xxl-3 col-xl-4 ">
            <div className='px-4 menu_Box pb-4'>
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