import React from 'react';
import styles from './style.module.css';

function HeaderBG({ title, img }) {

  const backgroundS: React.CSSProperties = {
    height: '50vh',
    background: `url(${img})`,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    filter: 'contrast(130%)',
  };

  return (<>
    <div className={`container-fluid ${styles.bg}`} style={backgroundS}>
      <div className={` ${styles.darkLayer}`}>
        <h1 className={`text-center ${styles.title}`}>{title}</h1>
      </div>
    </div>
  </>);
}
export default HeaderBG;