import React, { useEffect, useState } from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Dropdown, Space } from 'antd';
import styles from './style.module.css';
import { Link, useLocation } from 'react-router-dom';

interface ItemDropDown {
  title: string;
  url: string;
  childrens?: ItemDropDown[];
}

function NavDropDown({ title, url, childrens }: ItemDropDown) {
  const location = useLocation();

  const [active, setActive] = useState('');
  useEffect(() => {
    setActive(location.pathname.indexOf(url) === 0 ? 'menuActive' : '');
  }, [location]);

  const [items, setItems] = useState<MenuProps['items']>([]);

  useEffect(() => {
    const list = childrens?.map((e, i) => {
      return {
        key: i.toString(),
        label: (<Link to={url + e.url} className={` ${styles.dropItem}`}>{e.title}</Link>),
      };
    });

    const contruct: MenuProps['items'] = [];

    const menu = list?.reduce((rs, e, i) => {
      rs.push(e);
      if (i !== list.length - 1) {
        rs.push({
          type: 'divider',
        });
      }

      return rs;
    }, contruct);


    setItems(menu);
  }, []);


  return (<>
    <ConfigProvider theme={{
      token: {
        controlItemBgHover: '#ff7a45',
        controlPaddingHorizontal: 20,
        fontSize: 17,
        padding: 0,
        paddingXS: 0,
        paddingXXS: 0,
        marginXS: 0,
        marginXXS: 0,
        borderRadiusXS: 0,
        borderRadiusSM: 0,
        borderRadiusLG: 0,
      },
      components: {
        Dropdown: {
          paddingBlock: 15,
        },
      },
    }} >
      <Dropdown menu={{ items }} overlayClassName={styles.dropContent}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <div
              className={`px-3 menuItem ${active}`}
            >{title}</div>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </ConfigProvider>


  </>);
}
export default NavDropDown;