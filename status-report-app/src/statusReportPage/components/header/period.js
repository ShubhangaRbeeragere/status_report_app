import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const Period = (props) => {
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
            <DatePicker dateFormat="dd/MM/yyyy" selected={props.date} className="datePicker" onChange={(date) => props.setDate(date)}/>
            <button className="searchButton" onClick={() => {props.fetchData()}}>Search</button>
        </div>
    )
}