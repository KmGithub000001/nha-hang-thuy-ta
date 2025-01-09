import React from 'react';

interface Props {
  link: string;
}

function CarouItem({ link }: Props) {

  const style: React.CSSProperties = {
    background: `url(${link})`,
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };


  return (<>
    <div style={style}></div>
  </>);
}
export default CarouItem;