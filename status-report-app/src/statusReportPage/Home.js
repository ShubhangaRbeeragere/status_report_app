// import { useNavigate } from "react-router";
import './Home.css'
import { Header } from "./components/header/header";
import { ToDoList } from './components/toDoList/toDoList';
import { Achievements } from "./components/achievements/achievements";
export const HomePage = (params) => {
    return(
            <div className="homePage">
                { <Header/> }
                { <Achievements/> }
                { <ToDoList/> }
            </div>
   )
}