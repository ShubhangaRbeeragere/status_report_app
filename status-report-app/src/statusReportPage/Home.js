import { useState } from "react";
import { Header } from "./components/header/header";
import { ToDoList } from './components/toDoList/toDoList';
import { Achievements } from "./components/achievements/achievements";
import { AddList } from "./components/toDoList/addList";
import './Home.css'

export const HomePage = (params) => {
    const [date, setDate] = useState(new Date()); 
    const toDoList = [
        {
                list_id: 3,
                title: "React",
                date: "2021-05-10",
                contentKey: [
                    {
                        "content_id": 3,
                        "content": "work on login page"
                    },
                    {
                        "content_id": 4,
                        "content": "finish work on front page by dec 30"
                    }
                ]
            },
            {
                list_id: 5,
                title: "Nodejs",
                date: "2021-05-14",
                contentKey: [
                    {
                        content_id: 8,
                        content: "problem with user authentication"
                    },
                    {
                        content_id: 9,
                        content: "add middleware"
                    },
                    {
                        content_id: 10,
                        content: "add auth middleware"
                    },
                    {
                        content_id: 11,
                        content: "add jwt for auth verification"
                    },
                    {
                        content_id: 12,
                        content: "use express"
                    }
            ]
        },
            {
                list_id: 6,
                title: "Nodejs",
                date: "2021-05-14",
                contentKey: [
                    {
                        content_id: 8,
                        content: "problem with user authentication"
                    },
                    {
                        content_id: 9,
                        content: "add middleware"
                    },
                    {
                        content_id: 10,
                        content: "add auth middleware"
                    },
                    {
                        content_id: 11,
                        content: "add jwt for auth verification"
                    },
                    {
                        content_id: 12,
                        content: "use express"
                    }
            ]
        }

    ];
    const fetchData = () => {
        let dateValue = date.toLocaleDateString().replaceAll("/", "-");
       console.log(`selected Date is ${dateValue}`); 
    }
    return(

            <div className="homePage">
                 <Header date = {date} setDate = {setDate} fetchData = {fetchData}/>
                 <Achievements/> 
                 <ToDoList toDoList = {toDoList}/> 
                 <AddList />
            </div>
   )
}