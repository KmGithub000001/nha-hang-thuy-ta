import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function NavbarStyle() {
  const [color, setColor] = useState('black');
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.indexOf('/thuc-don') === 0) {
      setColor('black');
    } else {
      setColor('white');
    }
  }, [location]);
  return (<>
    <style
      dangerouslySetInnerHTML={{
        __html: `.navbar-text:not(.active){color: ${color};}`,
      }}
    />
  </>);
}
export default NavbarStyle;