import React from 'react'
import PropTypes from 'prop-types';
import { Button, Modal,  DatePicker,Divider } from 'antd';
import moment from 'moment'

const dateFormat = 'YYYY/MM/DD hh:mm:ss';
const { RangePicker } = DatePicker;

const PopUpForm = ({title,visible, onCancel, data}) => {
    return (
        <div>
        <Modal
          title={title}
          visible={visible}
          onCancel={onCancel}
          footer={[
            <Button key="submit" type="primary" onClick={onCancel}>
              Close
            </Button>
          ]}
        >
           <React.Fragment>     
                  {
                    data.map((value, index) => {
                        return (
                          <div className="row">
                          <div className="col-6" >
                            <div><span>From :</span> <span>{value.start_time}</span></div>
                            <div><span style={{paddingRight: '18px'}}>To :</span> <span>{value.date_end_value}</span></div>
                            </div>
                            <div className="col-6">
                            <RangePicker
                                  defaultValue={[moment(value.start_time, dateFormat), moment(value.date_end_value, dateFormat)]}
                                  format={dateFormat}
                                />
                            </div>
                            <Divider />
                          </div>
                        )
                    })
                    
                }
            </React.Fragment>

        </Modal>
      </div>
    )
}

PopUpForm.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  saveBtnLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  form: PropTypes.object,
}

export default PopUpForm