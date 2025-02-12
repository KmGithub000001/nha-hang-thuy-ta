import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

interface Props {
  curID: number;
}

function MoreLoby({ curID }: Props) {

  const loby1 = useSelector((state: RootState) => state.image.loby1[0]);
  const loby2 = useSelector((state: RootState) => state.image.loby2[0]);
  const loby3 = useSelector((state: RootState) => state.image.loby3[0]);
  const loby4 = useSelector((state: RootState) => state.image.loby4[0]);

  const loby = [
    {
      id: 1,
      name: 'Thuyền rồng Kim Long - Hoàng Long',
      url: '/sanh-tiec/thuyen-rong-kim-long-hoang-long',
      createAt: '11/02/2020',
      validator: loby1,
    },
    {
      id: 2,
      name: 'Sảnh Ngân Sen',
      url: '/sanh-tiec/sanh-ngan-sen',
      createAt: '11/02/2020',
      validator: loby2,
    },
    {
      id: 3,
      name: 'Sảnh Hoàng Sen - Kim Sen',
      url: '/sanh-tiec/sanh-hoang-sen-kim-sen',
      createAt: '11/02/2020',
      validator: loby3,
    },
    {
      id: 4,
      name: 'Sảnh Thanh Sen',
      url: '/sanh-tiec/sanh-thanh-sen',
      createAt: '11/02/2020',
      validator: loby4,
    },
  ];

  const options = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',

  };

  return (<>
    <h2 style={{ color: '#fa8c16' }}>Các sảnh tiệc khác</h2>
    <Slider {...options}>
      {
        loby.filter((e) => e.id !== curID)
          .map((e, i) => <>
            <div className='row px-1'>
              <div className="col-12">
                <Link to={e.url}>
                  <img src={e.validator} className='w-100' style={{ height: '200px' }} />
                </Link>
              </div>
              <div className="col-6 text-start">{e.name}</div>
              <div className="col-6 text-end">{e.createAt}</div>
            </div>
          </>)
      }
    </Slider>
  </>);
}
export default MoreLoby;