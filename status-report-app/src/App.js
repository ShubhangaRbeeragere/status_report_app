import CompanyName from "./loginPage/CompanyName";
import LoginTemplate from "./loginPage/LoginTemplate";
import LoadingScreen from "./loginPage/LoadingScreen";
import { useState } from "react";
import './App.css'

const App = () => {
    let [userInput, setUserInput] = useState({username: "", password: ""});
    let [error, setError] = useState(null);
    let [loader, setLoader] = useState(false);


    ////for fetching the data from the server
     const fetchData = async (username, password) => {
         try{
             setLoader(true);
            const data = await fetch(`http://localhost:9000/?username=${username}&password=${password}`)
            console.log(data);
            if(!data.ok){
                throw new Error("Couldn't Connect To The Serever");
            }
            const response = await data.json();
            if(response.result === "reject"){
                throw new Error("Invalid Username Or Password");
            }
         }
         catch(error){
             setError(error.message);
             setLoader(false);
         }
     }

    ////for validating the form when user clicks on 'login'
    const formValidation = (e) => {
        e.preventDefault();
        try{
            if(userInput.username === "" || userInput.password === ""){
                throw new Error("You Can't Leave The Inputs Blank");
            }
            else{
                setError(null);
            }
            fetchData(userInput.username, userInput.password);
        }
        catch(error){
            setError(error.message);
        }
    }

    ///for updating input fields in form
    function updateInputs(e){
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    return (
        <div className="app">
                <CompanyName/>
                <LoginTemplate formValidation={formValidation} updateInputs={updateInputs} userInput={userInput} error={error}/>
                {loader&&<LoadingScreen/>} 
        </div> 
    )
}

export default App;

