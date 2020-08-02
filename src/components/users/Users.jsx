import React, { Component } from 'react'
import { connect } from 'react-redux';
import userActions from '../store/actions/userActions'

import UserList from './UserList.js'

import userSelector from '../selector/userSelector.js'
import PropTypes from 'prop-types';


import UsersTable from './UsersTable.js'


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      values: []
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleModal(data){
    
    this.setState({
      showModal: true,
      values: data
    })
  }

  handleCancel() {
    this.hideMoal()
  }

  hideMoal(){
    
    this.setState({
      showModal: false,
      values: []
    })
  }
 


  render() {
    let {data} = this.props
    
    return (
      <div >
        <UserList title="Activity Period"
                  visible={this.state.showModal}
                  data={this.state.values}
                  onCancel={this.handleCancel}
         />
        <UsersTable data={data}
                    handleModal={this.handleModal}
        />
      </div>
    )
  }
}

Users.propTypes = {
  user: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => (userActions(dispatch));
const mapStateToProps = ({user}) => (userSelector(user))
export default connect(mapStateToProps, mapDispatchToProps)(Users);

