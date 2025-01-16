import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

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
      url: '/thuyen-rong-kim-long-hoang-long',
      createAt: '11/02/2020',
      validator: loby1,
    },
    {
      id: 2,
      name: 'Sảnh Ngân Sen',
      url: '/sanh-ngan-sen',
      createAt: '11/02/2020',
      validator: loby2,
    },
    {
      id: 3,
      name: 'Sảnh Hoàng Sen - Kim Sen',
      url: '/sanh-hoang-sen-kim-sen',
      createAt: '11/02/2020',
      validator: loby3,
    },
    {
      id: 4,
      name: 'Sảnh Thanh Sen',
      url: '/sanh-thanh-sen',
      createAt: '11/02/2020',
      validator: loby4,
    },
  ];

  return (<>
    <h2 style={{ color: '#fa8c16' }}>Các sảnh tiệc khác</h2>
    <div className="row row-cols-3">
      {
        loby.filter((e) => e.id !== curID)
          .map((e, i) => <div key={`MoreLoby_Item_${i}`} className="col">
            <div className="row">
              <div className="col-12">
                <img src={e.validator} className='w-100' style={{ height: '200px' }} />
              </div>
              <div className="col-6">{e.name}</div>
              <div className="col-6">{e.createAt}</div>
            </div>
          </div>)
      }
    </div>
  </>);
}
export default MoreLoby;