import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import NavBarDropdown from './Dropdown';
import MenuItem from './MenuItem';


function NavBarMenu() {
  const menu = useSelector((state: RootState) => state.menu.val);
  const ready = useSelector((state: RootState) => state.menu.ready);

  return (<>
    <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
      {
        ready && menu.map((e, i) =>
          e.children?.length === 0 ? <MenuItem key={`NavBarMemu_item_${i}`} {...e} /> : <NavBarDropdown key={`NavBarMemu_item_${i}`} {...e} />)
      }
    </ul>
  </>);
}
export default NavBarMenu;