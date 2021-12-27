// import { useNavigate } from "react-router";
import './Home.css'
import { Header } from "./components/header/header"
export const HomePage = (params) => {
    return(
            <div className="homePage">
                { <Header/> }
            </div>
   )
}