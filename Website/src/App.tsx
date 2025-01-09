
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Home from './Component/Home/Home';
import Layout from './Component/Layouts/Layout';
import Menu from './Component/Menu/Menu';
import WorkshopRoom from './Component/WorkshopRoom/WorkshopRoom';

function App() {

  return (<>
    <Router>
      <Routes>
        <Route path='/trang-chu' element={<Home />} />
        <Route path='/' element={<Layout />}>
          <Route path='thuc-don' element={<Menu />} />
          <Route path='phong-hoi-nghi' element={<WorkshopRoom />} />
          
        </Route>
      </Routes>
    </Router>
  </>
  );
}
export default App;
