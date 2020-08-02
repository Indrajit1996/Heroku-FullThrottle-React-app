import month from '../store/const/date'
import moment from 'moment';

const userSelector = ({collection}) => {
    if(collection){
        let members = collection[0].members
        let modified_members = members.map((member) => {
            let res = []
            member.activity_periods.map((act) => {
                let date = getDateFormat(act)
        
                res.push(date)
            })
            return {
                id: member.id,
                real_name: member.real_name,
                tz: member.tz,
                activity_periods: res
            }
        })

        return  { 
            data: modified_members
        }
    }

    function getDateFormat(date){
        let start = date.start_time;
        let end = date.end_time

        let array_start = start.split(" ")
        let array_end = end.split(" ")
        let start_time =  moment(array_start[4], "h:mm:ss A").format("HH:mm:ss")
        let end_time =  moment(array_end[3], "h:mm:ss A").format("HH:mm:ss")
        
        let getMonthStart = month[array_start[0]]
        let getMonthEnd = month[array_end[0]]

        let date_start_value = array_start[2] + "-" + getMonthStart + "-" + array_start[1] +" "+ start_time
        let date_end_value = array_end[2] + "-" + getMonthEnd + "-" + array_end[1] +" "+ end_time
        return {
            start_time: date_start_value,
            date_end_value: date_end_value
        }

    }
}
export default userSelector