import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './Component/Home/Home';
import Layout from './Component/Layouts/Layout';
import Menu from './Component/Menu/Menu';
import WorkshopRoom from './Component/WorkshopRoom/WorkshopRoom';
import CuponWedding from './Component/CuponWedding/CuponWedding';
import Loby1 from './Component/Loby/Loby1';
import Loby2 from './Component/Loby/Loby2';
import Loby3 from './Component/Loby/Loby3';
import Loby4 from './Component/Loby/Loby4';

import { fetchFood } from './Component/Redux/food';
import { useDispatch } from 'react-redux';
import { AppDishpatch } from './Component/Redux/store';


function App() {
  const dispatch = useDispatch<AppDishpatch>();
  useEffect(() => {
    dispatch(fetchFood());
  }, []);

  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trang-chu' element={<Home />} />
        <Route path='/' element={<Layout />}>
          <Route path='thuc-don' element={<Menu />} />
          <Route path='phong-hoi-nghi' element={<WorkshopRoom />} />
          <Route path='khuyen-mai-tiec-cuoi' element={<CuponWedding />} />
          <Route path='sanh-tiec/'>
            <Route path='thuyen-rong-kim-long-hoang-long' element={<Loby1 />} />
            <Route path='sanh-ngan-sen' element={<Loby2 />} />
            <Route path='sanh-hoang-sen-kim-sen' element={<Loby3 />} />
            <Route path='sanh-thanh-sen' element={<Loby4 />} />

          </Route>

        </Route>
      </Routes>
    </Router>
  </>
  );
}
export default App;
