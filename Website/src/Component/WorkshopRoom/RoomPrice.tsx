import { Col, ConfigProvider, Row, Table } from 'antd';
import type { TableProps } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';

interface DataType {
  address: string;
  area: number | null;
  contain: number | null;
  table: number | null;
  sesion: number | string | null;
  day: number | null;
  note: string | null;
}


function RoomPrice() {

  const room = useSelector((state: RootState) => state.room.val);
  const note = useSelector((state: RootState) => state.room.note);

  const [data, setData] = useState<DataType[]>([]);

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Vị trí',
      dataIndex: 'address',
      render: (text) => <p className={` ${styles.tbText}`}
        style={{ minWidth: '130px' }}
      >{text}</p>,
    },
    {
      title: 'Diện tích',
      dataIndex: 'area',
      render: (text) => <p className={` ${styles.tbText}`}>{text}m<sup>2</sup></p>,
    },
    {
      title: 'Xếp theo kiểu rạp hát',
      dataIndex: 'contain',
      render: (text) => <p className={` ${styles.tbText}`}>{text} khách</p>,
    },
    {
      title: 'Công suất phòng',
      children: [
        {
          title: 'Xếp theo kiểu bàn tròn (10 khách/bàn)',
          dataIndex: 'table',
          render: (text) => <p className={` ${styles.tbText}`}>{text}</p>,
        },
        {
          title: 'Xếp theo kiểu bàn tròn (10 khách/bàn)',
          dataIndex: 'table',
          render: (text) => <p className={` ${styles.tbText}`}>{text}</p>,
        },
      ],
    },
    {
      title: 'Nữa ngày (VNĐ)',
      dataIndex: 'sesion',
      render: (text) => <p className={` ${styles.tbText}`}>{text.toLocaleString('vi-VN')}</p>,
      onCell: (e, i) => {
        switch (e.address) {
          case 'Thuyền Kim Long':
            return { colSpan: 3, rowSpan: 2 };
          case 'Thuyền Hoàng Long':
            return { colSpan: 0, rowSpan: 0 };
          default:
            return { colSpan: 1, rowSpan: 1 };
        }
      },
    },
    {
      title: 'Nguyên ngày (VNĐ)',
      dataIndex: 'day',
      render: (text) => <p className={` ${styles.tbText}`}>
        {text !== null ? text.toLocaleString('vi-VN') : null}
      </p>,
      onCell: (e, i) => {
        if (['Thuyền Kim Long', 'Thuyền Hoàng Long'].includes(e.address)) {
          return { rowSpan: 0, colSpan: 0 };
        }
        return { colSpan: 1, rowSpan: 1 };
      },
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      onCell: (_, i) => {
        return { rowSpan: i === 0 ? 5 : 0 };
      },
      render: (text) => <p className={` ${styles.tbText}`}>{text}</p>,
    },
  ];

  useEffect(() => {
    setData(
      room.map((e) => {
        let sesion: string | number | null = e.sesion;
        if (sesion === null) { sesion = 'Chỉ phục vụ set menu'; }
        return { ...e, note: note, sesion: sesion };
      }));
  }, []);


  return (<>
    <ConfigProvider theme={{
      token: {

      },
      components: {
        Table: {
          headerBg: '#ffd591',
        },
      },
    }} >
      <Table
        <DataType>
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          hideOnSinglePage: true,
        }}
        rowHoverable={false}
      />
    </ConfigProvider>
    <Row>
      <Col className={`py-3 ${styles.tbFooterText}`}
        span={24} style={{ background: '#fa8c16' }}
      >Khuyến mãi</Col>
      <Col className={`py-3 ${styles.tbFooterText}`} span={6}>Màn hình LED</Col>
      <Col className={`py-3 ${styles.tbFooterText}`} span={6}>Bàn lễ tân</Col>
      <Col className={`py-3 ${styles.tbFooterText}`} span={6}>Bục phát biểu</Col>
      <Col className={`py-3 ${styles.tbFooterText}`} span={6}>Âm thanh, 2 micro</Col>
    </Row>
  </>);
}
export default RoomPrice;