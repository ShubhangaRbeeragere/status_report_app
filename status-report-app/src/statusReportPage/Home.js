import { useState, useEffect } from "react";
import { Header } from "./components/header/header";
import { ToDoList } from "./components/toDoList/toDoList";
import { Achievements } from "./components/achievements/achievements";
import { AddList } from "./components/toDoList/addList";
import { useGet } from "./HTTPhooks/fetch";
import LoadingScreen from "../loginPage/LoadingScreen";
import getAll from "./HTTPmethods/getAll";
import addData from "./HTTPmethods/addData";
import deleteData from "./HTTPmethods/deleteData";
import updateData from "./HTTPmethods/updateData";
import { AddContent } from "./components/toDoList/addContent";
import LoginError from "./components/errorMessages/loginError";
import StatusMessage from "./components/errorMessages/httpStatusMessage";
import Presentation from "./components/presentation/presentation";
import "./Home.css";

export const HomePage = (params) => {
    //hooks
    //for react-date-picker API///////////////////////////////////////////////////////////
    const [date, setDate] = useState(new Date());
    //for addList form validation///////////////////////////////////////////////////////////
    const [addList, setAddList] = useState({
        addListFormClass: "",
        addListWrapperClass: "",
        project: "",
        date: "",
        content: "",
    });
    //for addContent form validation///////////////////////////////////////////////////////////
    const [addContent, setAddContent] = useState({
        addContentFormClass: "",
        addContentWrapperClass: "",
        content: "",
        project: "",
    });

    let token = localStorage.getItem("token");
    //for adding project to toDoList///////////////////////////////////////////////////////////
    //and handling loader and errors
    let {
        data: toDoList,
        setData: setToDoList,
        loadPage,
        error,
        setError,
        setLoadPage,
    } = useGet("http://localhost:7000/toDoList/getAll", token);

    //for handling statusMessages after HTTP requests
    let [statusMessage, setStatusMessage] = useState({
        message: null,
        isVisible: false,
    });

    //for displaying presentation
    let [presentation, setPresentation] = useState({
        buttonState: false,
        data: null,
    });

    //useeffect hhoookk///////////////////////////////////////////////////////////
    useEffect(() => {
        //set the title for home page
        document.title = "Home page";
        //calling getPresentation
        getPresentation();
    }, []);

    //function for changing statusMessage isVisible variable
    function changeMessageVisiblity() {
        setStatusMessage({ ...statusMessage, isVisible: false });
    }
    //function for addList template///////////////////////////////
    //add or cancel the addlist form///////////////////////////////////////////////////////////
    function toggleAddlist(formClassName, wrapperClassName) {
        setAddList({
            ...addList,
            addListFormClass: formClassName,
            addListWrapperClass: wrapperClassName,
            content: "",
            project: "",
            date: new Date().toISOString().substring(0, 10),
        });
    }
    //add all the data to the form states/////////////////////////////////////////////////
    function addListInputValidate(e) {
        setAddList({ ...addList, [e.target.name]: e.target.value });
    }
    //data validation for addList///////////////////////////////////////////////////////////
    function addListFormValidate(e) {
        e.preventDefault();
        /*use regular expresions to find all text between # and #.
        so that multiple content can be added at once
        */
        if (
            addList.content === "" ||
            addList.project === "" ||
            addList.date === ""
        ) {
            setStatusMessage({
                message: "Inputs Can't Be Empty",
                isVisible: true,
            });
            return;
        }
        let regEx = /#[^(##)]*#/g;
        let array = [];
        let finalArray = [];
        let text = addList.content;

        while ((array = regEx.exec(text)) !== null) {
            finalArray.push({ text: array[0].replaceAll("#", "") });
        }
        if (finalArray.length === 0) {
            finalArray = [{ text: addList.content }];
        } else console.log("final Array", finalArray);
        //add data to the database with the final array
        let jsonData = {
            title: addList.project,
            date: addList.date,
            content: finalArray,
        };
        //add the data and get the addedd data
        let receiveData = async () => {
            setLoadPage(true);
            let response = await addData(
                "http://localhost:7000/toDoList/addData",
                token,
                jsonData
            );
            if (response === "error") {
                setError(true);
                console.log("error occured");
                setAddList({
                    ...addList,
                    addListFormClass: "form-left-right-two",
                    addListWrapperClass: "wrapper-fade-out",
                });
            } else if (response.error) {
                setLoadPage(false);
                console.log(response.error);
                setStatusMessage({ isVisible: true, message: response.error });
            } else {
                setLoadPage(false);
                setToDoList([...toDoList, response]);
                setAddList({
                    ...addList,
                    addListFormClass: "form-left-right-two",
                    addListWrapperClass: "wrapper-fade-out",
                });
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
    function toggleContentlist(projectName, formClassName, wrapperClassName) {
        setAddContent({
            addContentFormClass: formClassName,
            addContentWrapperClass: wrapperClassName,
            project: projectName,
            content: "",
        });
    }
    function addContentInputValidate(e) {
        setAddContent({ ...addContent, [e.target.name]: e.target.value });
    }
    function addContentFormValidate(e) {
        e.preventDefault();
        //add data to the database
        if (addContent.content === "") {
            setStatusMessage({
                message: "Content Can't Be Empty",
                isVisible: true,
            });
            return;
        }
        let jsonData = {
            project: addContent.project,
            content: addContent.content,
        };
        //update the content and get the updated content///////////////////////////////////////////////////////////
        let receiveData = async () => {
            setLoadPage(true);
            let response = await updateData(
                "http://localhost:7000/toDoList/updateData",
                token,
                jsonData
            );
            if (response === "error") {
                setError(true);
                console.log("error occured");
                setAddContent({
                    ...addContent,
                    addContentFormClass: "form-left-right-two",
                    addContentWrapperClass: "wrapper-fade-out",
                });
            } else if (response.error) {
                console.log(response.error);
                setLoadPage(false);
                setStatusMessage({ isVisible: true, message: response.error });
            } else {
                setLoadPage(false);
                setAddContent({
                    ...addContent,
                    addContentFormClass: "form-left-right-two",
                    addContentWrapperClass: "wrapper-fade-out",
                });
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
            setLoadPage(true);
            let response = await deleteData(
                "http://localhost:7000/toDoList/removeData",
                token,
                jsonData
            );
            if (response === "error") {
                setError(true);
                console.log("deleteData: error occured");
            } else if (response.error) {
                setLoadPage(false);
                console.log(response.error);
            } else {
                setLoadPage(false);
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
            setLoadPage(true);
            let response = await deleteData(
                "http://localhost:7000/toDoList/removeData",
                token,
                jsonData
            );
            if (response === "error") {
                setError(true);
                console.log("deleteData: error occured");
            } else if (response.error) {
                setLoadPage(false);
                console.log(response.error);
            } else {
                setLoadPage(false);
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

    ///////Presentation///////////////////////////////////////////////
    function togglePresentation() {
        let button = presentation.buttonState ? false : true;
        setPresentation({ ...presentation, buttonState: button });
    }

    //get all the data from the server and display it in app
    function getPresentation() {
        let url = "http://localhost:7000/achievement/getAll";
        async function getData() {
            let result = await getAll(url, token);
            setPresentation({ ...presentation, data: result });
        }
        getData();
    }

    //dummy
    const fetchData = () => {
        let dateValue = date.toLocaleDateString().replaceAll("/", "-");
        console.log(`selected Date is ${dateValue}`);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            {loadPage && <LoadingScreen />}
            <div className="homePage">
                <Header
                    date={date}
                    setDate={setDate}
                    fetchData={fetchData}
                    presentation={presentation}
                    togglePresentation={togglePresentation}
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

                {
                    <AddList
                        toggleAddList={toggleAddlist}
                        addListInputValidate={addListInputValidate}
                        addListFormValidate={addListFormValidate}
                        addList={addList}
                    />
                }
                {
                    <AddContent
                        addContent={addContent}
                        toggleContentList={toggleContentlist}
                        addContentFormValidate={addContentFormValidate}
                        addContentInputValidate={addContentInputValidate}
                    />
                }

                {presentation.buttonState && (
                    <div className="presentationWrapper">
                        <Presentation
                            presentation={presentation}
                            togglePresentation={togglePresentation}
                            getPresentation={getPresentation}
                        />
                        <ToDoList
                            toDoList={toDoList}
                            toggleAddList={toggleAddlist}
                            toggleContentlist={toggleContentlist}
                            updateProjectName={updateProjectName}
                            deleteProject={deleteProjectOnclick}
                            deleteContent={deleteContentOnclick}
                        />
                    </div>
                )}
            </div>
            {error && <LoginError />}
            <StatusMessage
                message={statusMessage.message}
                isVisible={statusMessage.isVisible}
                changeMessageVisiblity={changeMessageVisiblity}
            />
        </>
    );
};
