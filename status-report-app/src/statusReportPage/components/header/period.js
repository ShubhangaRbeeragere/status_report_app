import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react"
export const Period = (props) => {
    const [startDate, setStartDate] = useState(new Date()); 
    return(
        <div className="period">
            {/* <div className="year">Year</div>
            <div className="month">Month</div>
            <select name="day" id="day"onClick={(e) => {console.log(e.target.value)}}>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
            </select> */}
            <DatePicker selected={startDate} className="datePicker" onChange={(date) => setStartDate(date)}/>
        </div>
    )
}