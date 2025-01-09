import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

function CarouContentBtn() {
  const btnT = {
    fontSize: 30,
    fontWeight: 450,


    defaultBg: '#ffffff',
    defaultColor: '#fa8c16',

    defaultHoverBg: '#fa8c16',
    defaultHoverColor: '#ffffff',
    defaultHoverBorderColor: '#ffffff',

  };
  return (<>
    <Link to={'/thuc-don'}>
      <ConfigProvider
        theme={{
          components: {
            Button: btnT,
          },
        }}
      >
        <Button className='px-5 py-4 playfair-0'>
          Tìm hiểu ngay
        </Button>
      </ConfigProvider>

    </Link>
  </>);
}
export default CarouContentBtn;