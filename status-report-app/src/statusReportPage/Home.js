import { useState, useEffect } from "react";
import { Header } from "./components/header/header";
import { ToDoList } from './components/toDoList/toDoList';
import { Achievements } from "./components/achievements/achievements";
import { AddList } from "./components/toDoList/addList";
import { useGet } from "./HTTPhooks/fetch";
import addData from "./HTTPmethods/addData";
import getAll from "./HTTPmethods/getAll";
import './Home.css'

export const HomePage = (params) => {
    const [date, setDate] = useState(new Date()); 
    let formDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const [addList, setAddList] = useState({AddListButtonState: false, project: "", date: formDate, content: ""})
    
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndpbGxpYW0uayIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJpYXQiOjE2NDA3ODA5NjgsImV4cCI6MTY0MDc4Mjc2OH0.G1sznfy70LUdxE-LdBCXnoFYwlsmhlzC05PMRtBpVxY';
    let {data: toDoList, setData: setToDoList} = useGet("http://localhost:7000/toDoList/getAll", token);
    useEffect(() => {
        console.log("to do list changed, useEffect");
    }, [toDoList])
    //function for addList template///////////////////////////////
    //add or cancel the addlist
    function toggleAddlist() {
        let buttonState  = addList.AddListButtonState ? false: true;
        setAddList({...addList, AddListButtonState: buttonState})
    }
    //add all the data to the form states
    function addListInputValidate(e) {
       setAddList({...addList, [e.target.name]: e.target.value})
    }
    function addListFormValidate(e) {
        e.preventDefault();
        console.log("form submitted");
        setAddList({...addList, AddListButtonState: false})
        //add data to the database
        let jsonData = {
            title: addList.project,
            date: addList.date,
            content: [
                {text: addList.content}
            ]
        }
        addData('http://localhost:7000/toDoList/addData', token, jsonData,
        getAll, setToDoList)
        
    }
    //dummy
    const fetchData = () => {
        let dateValue = date.toLocaleDateString().replaceAll("/", "-");
       console.log(`selected Date is ${dateValue}`); 
    }
    return(
        <div className="homePage">
            <Header date = {date} setDate = {setDate} fetchData = {fetchData}/>
            <Achievements/> 
            {
                <ToDoList toDoList = {toDoList} toggleAddList = {toggleAddlist}/> 
            }

            {  addList.AddListButtonState &&
            <AddList toggleAddList = {toggleAddlist}
                    addListInputValidate = {addListInputValidate}
                    addListFormValidate = {addListFormValidate}
                    addList = {addList}
                    setAddList = {setAddList}
                    date={date} formDate = {formDate}
                    />
            }
            
        </div>
   )
}