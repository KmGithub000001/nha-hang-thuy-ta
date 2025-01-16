import { Carousel, ConfigProvider, Image } from 'antd';
import React, { useState } from 'react';
import CarouItem from './CarouItem';
import CarouContent from './CarouContent';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

function Home() {

  const carouselBS: React.CSSProperties = {
    height: '100vh',
    position: 'relative',
  };

  const carouselConfig = {
    autoplay: true,
    arrows: true,
  };

  const carouselT = {
    arrowSize: 30,
    arrowOffset: 30,
    dotActiveWidth: 20,
    dotWidth: 20,
    dotHeight: 20,
    dotOffset: 50,
  };

  const imgs = useSelector((state: RootState) => state.image.carousel);
  
  return (<>
    <div className='container-fluid px-0' style={carouselBS}>
      <ConfigProvider theme={{
        components: {
          Carousel: carouselT,
        },
      }}>
        <Carousel {...carouselConfig}>
          {imgs.map((e) => <CarouItem link={e} />)}
        </Carousel>
      </ConfigProvider>
      <CarouContent />
    </div>
  </>);
}
export default Home;