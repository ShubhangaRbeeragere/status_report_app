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
    
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndpbGxpYW0uayIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJpYXQiOjE2NDA4MzcyMDQsImV4cCI6MTY0MDgzOTAwNH0.IG7ncGBlo4dIkNrfYaMsXSWqG9iXG_7fK4uknDR0ja0';
    //for adding project to toDoList
    let {data: toDoList, setData: setToDoList} = useGet("http://localhost:7000/toDoList/getAll", token);
    //function for addList template///////////////////////////////
    //add or cancel the addlist form
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
        //add the data and get the addedd data
        let receiveData = async() => {
            let response = await addData('http://localhost:7000/toDoList/addData', token, jsonData);
            if(response === "error"){
                console.log("error occured");
            }
            else{
                setToDoList([...toDoList, response]);
            }
        }
        receiveData();
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