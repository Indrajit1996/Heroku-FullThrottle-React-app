import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, DatePicker, Table } from 'antd';

UsersTable.propTypes = {
  data: PropTypes.object.isRequired
};

function UsersTable({data, handleModal}) {
  let dataColumns = [
    {
      title: 'Name',
      dataIndex: 'real_name',
      render: (text, record) => {
        return (
          <React.Fragment>
          <a style={{color: '#108ee9'}}
             onClick={() => handleModal(record.activity_periods)}>
            {record.real_name}
          </a>
          </React.Fragment>
        )
      }

    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',

    },
    {
      title: 'Continent/Country',
      dataIndex: 'tz',
      key: 'tz',

    },
  ]
  return (
    <div>

    <Table
      bordered
      dataSource={data}
      columns={dataColumns}
      rowClassName="editable-row"
      pagination={{ defaultPageSize: 5,
                    showSizeChanger: true, 
                    pageSizeOptions: ['5', '10', '20', '40'] }}

    />
    </div>
  );
}

export default UsersTable;