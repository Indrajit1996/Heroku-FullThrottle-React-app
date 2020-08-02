import React from 'react';
import PropTypes from 'prop-types';
import PopupForm from '../common/PopUpForm';
import { Button, Modal, Form, Input, DatePicker } from 'antd';

 class UserList extends React.Component {
  
  render(){
   let {visible, onCancel, title, data} = this.props
    return (
      <div>
        <PopupForm
          data={data}
          title={title}
          visible={visible}
          onCancel={onCancel}
      />
      </div>
    );
  }
}

UserList.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func
}

export default UserList