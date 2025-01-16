import React from 'react';
import styles from './style.module.css';

interface Props {
  id: number;
  type: string;
  image: string;
  children: any;
}


function MenuItem(prop: Props) {

  const imgS: React.CSSProperties = {
    position: 'absolute',
    top: '0px',
    right: '-80%',
    width: '100px',
    height: '100px',
    zIndex: 999,
    background: `url(${prop.image})`,
    backgroundPosition: 'center center',
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
  };

  return (<>
    <div className="col-lg-12 col-md-6 col-12">
      <div className='row mb-3'>
        <div className={`col-2 ${styles.listImageBox}`}>
          <div className={` ${styles.listImage}`} style={imgS}></div>
        </div>
        <div className='col-10'>
          <div className={`py-2 ${styles.list}`}>
            <h2>{prop.type}</h2>
            <p>{`${prop.children.length} món`}</p>
          </div>
        </div>
      </div>
    </div>
  </>);
}
export default MenuItem;