import { useState, useEffect } from "react";
import { Header } from "./components/header/header";
import { ToDoList } from "./components/toDoList/toDoList";
import { Achievements } from "./components/achievements/achievements";
import { AddList } from "./components/toDoList/addList";
import { useGet } from "./HTTPhooks/fetch";
import addData from "./HTTPmethods/addData";
import deleteData from "./HTTPmethods/deleteData";
import updateData from "./HTTPmethods/updateData";
import { AddContent } from "./components/toDoList/addContent";
import LoginError from "./components/errors/loginError";
import "./Home.css";

export const HomePage = (params) => {
    //hooks
    //for react-date-picker API///////////////////////////////////////////////////////////
    const [date, setDate] = useState(new Date());
    //for addList form validation///////////////////////////////////////////////////////////
    const [addList, setAddList] = useState({
        AddListButtonState: false,
        project: "",
        date: "",
        content: "",
    });
    //for addContent form validation///////////////////////////////////////////////////////////
    const [addContent, setAddContent] = useState({
        addContentButtonState: false,
        content: "",
        project: "",
    });

    let token = localStorage.getItem("token");
    //for adding project to toDoList///////////////////////////////////////////////////////////
    let {
        data: toDoList,
        setData: setToDoList,
        loadPage,
        error,
        setError,
    } = useGet("http://localhost:7000/toDoList/getAll", token);

    //for CSS addlist animation
    let [addListClassName, setAddListClassName] = useState("left-to-right");
    //useeffect hhoookk///////////////////////////////////////////////////////////
    useEffect(() => {
        //set the title for home page
        document.title = "Home page";
    }, []);

    //function for addList template///////////////////////////////
    //add or cancel the addlist form///////////////////////////////////////////////////////////
    function toggleAddlist() {
        let buttonState = addList.AddListButtonState ? false : true;
        if (buttonState === false) {
            setAddListClassName("left-to-right-two");
            setTimeout(() => {
                setAddList({
                    ...addList,
                    AddListButtonState: buttonState,
                    content: "",
                    project: "",
                    date: new Date().toISOString().substring(0, 10),
                });
            }, 1000);
        } else {
            setAddListClassName("left-to-right-one");
            setAddList({
                ...addList,
                AddListButtonState: buttonState,
                content: "",
                project: "",
                date: new Date().toISOString().substring(0, 10),
            });
        }
    }
    //add all the data to the form states/////////////////////////////////////////////////
    function addListInputValidate(e) {
        setAddList({ ...addList, [e.target.name]: e.target.value });
    }
    //data validation for addList///////////////////////////////////////////////////////////
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
                setError(true);
            } else {
                setToDoList([...toDoList, response]);
            }
        };
        receiveData();
    }
    //////addContent form validation//////////////////////////////////////////////////
    //add the project name from the addList///////////////////////////////////////////////////////////
    function updateProjectName(projectName) {
        console.log(projectName);
        setAddContent({ ...addContent, project: projectName });
    }
    //add or cancel the contentlist form and also update the project name for future//////////////////
    function toggleContentlist(projectName) {
        let buttonState = addContent.addContentButtonState ? false : true;
        setAddContent({
            addContentButtonState: buttonState,
            project: projectName,
            content: "",
        });
    }
    function addContentInputValidate(e) {
        setAddContent({ ...addContent, [e.target.name]: e.target.value });
    }
    function addContentFormValidate(e) {
        e.preventDefault();
        console.log("form data is ", addContent.project, addContent.content);
        console.log("content form submitted");
        setAddContent({ ...addContent, addContentButtonState: false });
        //add data to the database
        let jsonData = {
            project: addContent.project,
            content: addContent.content,
        };
        //update the content and get the updated content///////////////////////////////////////////////////////////
        let receiveData = async () => {
            let response = await updateData(
                "http://localhost:7000/toDoList/updateData",
                token,
                jsonData
            );
            if (response === "error") {
                setError(true);
                console.log("error occured");
            } else {
                let content = response.content;
                let projectIndex = 0;
                let project = response.project;
                for (const list in toDoList) {
                    if (project === toDoList[list].title) {
                        projectIndex = list;
                        break;
                    }
                }

                //clone the list
                let newList = toDoList.slice();
                newList[projectIndex].contentKey.push(content);
                setToDoList(newList);
            }
        };
        receiveData();
    }
    ////////delete the project onClick//////////////////////////////////////////////
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
                setError(true);
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
    ////////delete the content of the project onClick/////////////////////////////////////
    function deleteContentOnclick(projectName, content) {
        let jsonData = {
            project: projectName,
            deleteProject: false,
            content: content,
        };
        //delete the content and remove the content from the toDoList
        let deleteContent = async () => {
            let response = await deleteData(
                "http://localhost:7000/toDoList/removeData",
                token,
                jsonData
            );
            if (response === "error") {
                setError(true);
                console.log("deleteData: error occured");
            } else {
                let content = response.content;
                let projectIndex = 0;
                let project = response.project;
                for (const list in toDoList) {
                    if (project === toDoList[list].title) {
                        projectIndex = list;
                        break;
                    }
                }
                let newContent = toDoList[projectIndex].contentKey.filter(
                    (data) => {
                        return content === data.content ? false : true;
                    }
                );

                //clone the list
                let newList = toDoList.slice();
                newList[projectIndex].contentKey = newContent;
                setToDoList(newList);
            }
        };
        deleteContent();
    }
    //dummy
    const fetchData = () => {
        let dateValue = date.toLocaleDateString().replaceAll("/", "-");
        console.log(`selected Date is ${dateValue}`);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            {loadPage && (
                <div className="homePage">
                    <Header
                        date={date}
                        setDate={setDate}
                        fetchData={fetchData}
                    />
                    <Achievements />
                    {
                        <ToDoList
                            toDoList={toDoList}
                            toggleAddList={toggleAddlist}
                            toggleContentlist={toggleContentlist}
                            updateProjectName={updateProjectName}
                            deleteProject={deleteProjectOnclick}
                            deleteContent={deleteContentOnclick}
                        />
                    }

                    {addList.AddListButtonState && (
                        <AddList
                            addListClassName={addListClassName}
                            toggleAddList={toggleAddlist}
                            addListInputValidate={addListInputValidate}
                            addListFormValidate={addListFormValidate}
                            addList={addList}
                        />
                    )}
                    {addContent.addContentButtonState && (
                        <AddContent
                            addContent={addContent}
                            toggleContentList={toggleContentlist}
                            addContentFormValidate={addContentFormValidate}
                            addContentInputValidate={addContentInputValidate}
                        />
                    )}
                </div>
            )}
            {error && <LoginError />}
        </>
    );
};
