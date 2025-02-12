import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { useEffect, useState } from 'react';

function ImgCarousel() {
  const foodList = useSelector((state: RootState) => state.validator.foodList);
  const foodID = useSelector((state: RootState) => state.validator.foodID);

  const [itemDegree, setItemDegree] = useState(0);
  const [circleDegree, setCircleDegree] = useState(90);

  useEffect(() => {
    setItemDegree(360 / foodList.length);
  }, [foodList]);

  useEffect(() => {
    foodList.forEach((e, i) => {
      if (e.id === foodID) { setCircleDegree(45 + (i * itemDegree)); }
    });
  }, [foodID]);

  return (<>
    <div className="ImgCarou-container">
      <div className="ImgCarou-circle" style={{ transform: `rotate(${circleDegree}deg)` }}>
        {
          foodList.map((e, i) => <div className='ImgCarou-item' style={{
            transform: `rotate(${itemDegree * i}deg) translateX(200px)`,
          }}>
            <img src={e.image} className='ImgCarou-img' />
          </div>)
        }
      </div>
    </div>
  </>);
}
export default ImgCarousel;