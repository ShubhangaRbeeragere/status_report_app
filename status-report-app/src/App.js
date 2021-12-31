import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CompanyName from "./loginPage/CompanyName";
import LoginTemplate from "./loginPage/LoginTemplate";
import LoadingScreen from "./loginPage/LoadingScreen";
import { HomePage } from "../src/statusReportPage/Home";
import userAuth from "./loginPage/HTTPmethods/getData";
import "./App.css";

const App = () => {
  let [userInput, setUserInput] = useState({ username: "", password: "" });
  let [error, setError] = useState(null);
  let [loader, setLoader] = useState(false);

  ////for fetching the data from the server
  const fetchData = async (username, password) => {
    try {
      setLoader(true);
      let jsonData = { username: username, password: password };
      const data = await userAuth("http://localhost:7000/login/auth", jsonData);
      if (data === "error") {
        throw new Error("Invalid Username Or Password");
      } else {
        localStorage.setItem("token", data.token);
        setLoader(false);
        console.log(localStorage.getItem("token"));
      }
    } catch (error) {
      setError(error.message);
      setLoader(false);
    }
  };

  ////for validating the form when user clicks on 'login'
  const formValidation = (e) => {
    e.preventDefault();
    try {
      if (userInput.username === "" || userInput.password === "") {
        throw new Error("You Can't Leave The Inputs Blank");
      } else {
        setError(null);
      }
      fetchData(userInput.username, userInput.password);
    } catch (error) {
      setError(error.message);
    }
  };

  ///for updating input fields in form
  function updateInputs(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  return (
    <div className="app">
      <>
        <CompanyName />
        <LoginTemplate
          formValidation={formValidation}
          updateInputs={updateInputs}
          userInput={userInput}
          error={error}
        />
        {loader && <LoadingScreen />}
      </>
      {/* <HomePage /> */}
    </div>
  );
};

export default App;
