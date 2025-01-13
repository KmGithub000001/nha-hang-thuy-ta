import { useState } from 'react';

function MoreLoby({ curID }) {

  const loby = useState([
    {
      id: 1,
      name: 'Thuyền rồng Kim Long - Hoàng Long',
      url: '/thuyen-rong-kim-long-hoang-long',
      validator: '/images/',
      createAt: '11/02/2020',
    },
    {
      id: 2,
      name: 'Sảnh Ngân Sen',
      url: '/sanh-ngan-sen',
      createAt: '11/02/2020',
    },
    {
      id: 3,
      name: 'Sảnh Hoàng Sen - Kim Sen',
      url: '/sanh-hoang-sen-kim-sen',
      createAt: '11/02/2020',
    },
    {
      id: 4,
      name: 'Sảnh Thanh Sen',
      url: '/sanh-thanh-sen',
      createAt: '11/02/2020',
    },
  ]);
  return (<>
    <h2 style={{ color: '#fa8c16' }}>Các sảnh tiệc khác</h2>
  </>);
}
export default MoreLoby;