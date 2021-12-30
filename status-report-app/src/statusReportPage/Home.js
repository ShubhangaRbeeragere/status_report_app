import { useState, useEffect } from "react";
import { Header } from "./components/header/header";
import { ToDoList } from "./components/toDoList/toDoList";
import { Achievements } from "./components/achievements/achievements";
import { AddList } from "./components/toDoList/addList";
import { useGet } from "./HTTPhooks/fetch";
import addData from "./HTTPmethods/addData";
import deleteData from "./HTTPmethods/deleteData";
import "./Home.css";

export const HomePage = (params) => {
  //hooks
  const [date, setDate] = useState(new Date());
  let formDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const [addList, setAddList] = useState({
    AddListButtonState: false,
    project: "",
    date: formDate,
    content: "",
  });
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndpbGxpYW0uayIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJpYXQiOjE2NDA4NDQ3MzEsImV4cCI6MTY0MDg0NjUzMX0.6shsYRvhfDIXun7Sk6l4Tr_Q_oD9HGENIh0RliF-cco";
  //for adding project to toDoList
  let { data: toDoList, setData: setToDoList } = useGet(
    "http://localhost:7000/toDoList/getAll",
    token
  );

  //function for addList template///////////////////////////////
  //add or cancel the addlist form
  function toggleAddlist() {
    let buttonState = addList.AddListButtonState ? false : true;
    setAddList({ ...addList, AddListButtonState: buttonState });
  }
  //add all the data to the form states/////////////////////////////////////////////////
  function addListInputValidate(e) {
    setAddList({ ...addList, [e.target.name]: e.target.value });
  }
  function addListFormValidate(e) {
    e.preventDefault();
    console.log("form submitted");
    setAddList({ ...addList, AddListButtonState: false });
    //add data to the database
    let jsonData = {
      title: addList.project,
      date: addList.date,
      content: [{ text: addList.content }],
    };
    //add the data and get the addedd data
    let receiveData = async () => {
      let response = await addData(
        "http://localhost:7000/toDoList/addData",
        token,
        jsonData
      );
      if (response === "error") {
        console.log("error occured");
      } else {
        setToDoList([...toDoList, response]);
      }
    };
    receiveData();
  }

  ////////delete the project onClick//////////////////////////////////////////////////////////////////////
  function deleteProjectOnclick(projectName) {
    let jsonData = {
      project: projectName,
      deleteProject: true,
    };
    //delete the project and remove the item only when succeeds
    let deleteProject = async () => {
      let response = await deleteData(
        "http://localhost:7000/toDoList/removeData",
        token,
        jsonData
      );
      if (response === "error") {
        console.log("deleteData: error occured");
      } else {
        let newList = toDoList.filter((data) => {
          let check = data.title !== response.project ? true : false;
          return check;
        });
        setToDoList(newList);
      }
    };
    deleteProject();
  }
  //dummy
  const fetchData = () => {
    let dateValue = date.toLocaleDateString().replaceAll("/", "-");
    console.log(`selected Date is ${dateValue}`);
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="homePage">
      <Header date={date} setDate={setDate} fetchData={fetchData} />
      <Achievements />
      {
        <ToDoList
          toDoList={toDoList}
          toggleAddList={toggleAddlist}
          deleteProject={deleteProjectOnclick}
        />
      }

      {addList.AddListButtonState && (
        <AddList
          toggleAddList={toggleAddlist}
          addListInputValidate={addListInputValidate}
          addListFormValidate={addListFormValidate}
          addList={addList}
          setAddList={setAddList}
          date={date}
          formDate={formDate}
        />
      )}
    </div>
  );
};
