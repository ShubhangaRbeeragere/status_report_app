import { useState } from "react";
import { Header } from "./components/header/header";
import { ToDoList } from './components/toDoList/toDoList';
import { Achievements } from "./components/achievements/achievements";
import './Home.css'

export const HomePage = (params) => {
    const [date, setDate] = useState(new Date()); 
    const fetchData = () => {
        let dateValue = date.toLocaleDateString().replaceAll("/", "-");
       console.log(`selected Date is ${dateValue}`); 
    }
    return(

            <div className="homePage">
                { <Header date = {date} setDate = {setDate} fetchData = {fetchData}/> }
                { <Achievements/> }
                { <ToDoList/> }
            </div>
   )
}