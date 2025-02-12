import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { setTypeID, setFoodID, setFood, setFoodList } from '../Redux/validator';

function MenuItem(prop) {
  const validatorTypeID = useSelector((state: RootState) => state.validator.typeID);
  const allFood = useSelector((state: RootState) => state.food.val);
  const dispatch = useDispatch();

  const changeValidator = () => {
    dispatch(setTypeID({ typeID: prop.id }));
    dispatch(setFoodID({ foodID: prop.children[0].id }));
    dispatch(setFood({ food: prop.children[0] }));
    dispatch(setFoodList({ foodList: allFood.filter((e) => e.id === prop.id)[0].children }));
    console.log('foodID: ', prop.children[0].id);
  };

  const imgS: React.CSSProperties = {
    position: 'absolute',
    top: '0px',
    right: '-80%',
    width: '100px',
    height: '100px',
    zIndex: 9,
    background: `url(${prop.image})`,
    backgroundPosition: 'center center',
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
  };

  return (<>
    <div className="col-xl-12 col-lg-6 col-12 menu_item">
      <div className='row mb-3'
      style={{ cursor: 'pointer' }}
      onClick={changeValidator}
      >
        <div className='col-2 list_Image_Box'>
          <div className='listImage' style={imgS}></div>
        </div>
        <div className='col-10'>
          <div className={`py-2 list ${prop.id === validatorTypeID ? 'active' : ''}`}>
            <h2>{prop.type}</h2>
            <p>{`${prop.children.length} món`}</p>
          </div>
        </div>
      </div>
    </div>
  </>);
}
export default MenuItem;