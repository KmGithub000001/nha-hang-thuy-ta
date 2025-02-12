import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useDispatch, useSelector } from 'react-redux';
import { AppDishpatch, RootState } from '../Redux/store';
import { useEffect, useState } from 'react';
import { setFoodID, setFood } from '../Redux/validator';

interface FoodItem {
  id: string;
  type: string;
  image: string;
  children: any[];
}

function FoodCarousel() {
  const dispatch = useDispatch<AppDishpatch>();
  const allFood = useSelector((state: RootState) => state.food.val);
  const typeFood = useSelector((state: RootState) => state.validator.typeID);
  const box = useRef(null);

  const [food, setFood1] = useState<FoodItem>(allFood.filter((e) => e.id === typeFood)[0]);
  useEffect(() => {
    setFood1(allFood.filter((e) => e.id === typeFood)[0]);

  }, [typeFood, allFood]);
  // =====================================

  const [indexBg, setIndexBg] = useState('translateX(0%)');
  const changeBgIndex = (i) => {
    const theme = document.getElementsByClassName('carou-theme')[0];
    const size = theme.getBoundingClientRect().width;
    setIndexBg(`translateX(${(size / 4) * i}px)`);
  };

  const change = (id, i) => {
    dispatch(setFoodID({ foodID: id }));
    dispatch(setFood({ food: food.children[i] }));
    changeBgIndex(i);
  };

  useEffect(() => {
    changeBgIndex(0);
  }, [typeFood]);

  // =====================================
  const [indexC, setindexC] = useState('translateX(0%)');
  const [indexContent, setIndexContent] = useState(0);
  const changeCIndex = () => {
    setindexC(`translateX(${indexContent * 25}%)`);
    console.log(indexContent);
  };

  const checkCIndex = () => {
    if (indexContent < 0) {
      setIndexContent(0);
      return;
    }
    if (food !== undefined && indexContent > food.children.length - 4) {
      let x = food.children.length - 4;
      if (x < 0) {
        x = 0;
      }
      setIndexContent(x);
      return;
    }
  };

  useEffect(() => {
    changeCIndex();

    setTimeout(() => {
      checkCIndex();
    }, 1e3);
  }, [indexContent]);

  const prev = () => {
    setIndexContent(indexContent - 1);
  };
  const next = () => {
    setIndexContent(indexContent + 1);
  };

  // =======================================
  

  return (<>
    <div className='container carou-contain px-5 w-auto'>
      <a className="carou-btn carou-prev" onClick={prev}><i className="fa-xl fa-solid fa-chevron-left"></i></a>
      <div className="carou-theme" ref={box}>
        <div className="carou-content" style={{ transform: indexC }}>
          <div className="carou-active" style={{ transform: indexBg }}></div>
          <div className="carou-items">
            {
              food !== undefined && food.children.map((e, i) => <div
                className='carou-item'
                onClick={() => { change(e.id, i); }}
              >
                <div className='w-100 d-flex' style={{ height: '170px' }}>
                  <img src={e.image} style={{ width: '150px' }} className='mx-auto my-auto' />
                </div>
                <h4 className='text-center'>{e.name}</h4>
                <h4 className='text-center'>{e.title}</h4>
              </div>)
            }
          </div>
        </div>
      </div>
      <a className="carou-btn carou-next" onClick={next}><i className="fa-xl fa-solid fa-chevron-right"></i></a>
    </div>
  </>);
}

export default FoodCarousel;