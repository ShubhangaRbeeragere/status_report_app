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
import LoginError from "./components/Messages/loginError";
import StatusMessage from "./components/Messages/httpStatusMessage";
import Presentation from "./components/presentation/presentation";
import DeleteNotification from "./components/Messages/deleteNotification";
import { DisplayToDoList } from "./components/toDoList/displayToDoList";
import "./Home.css";

export const HomePage = (params) => {
    //hooks
    //for react-date-picker API///////////////////////////////////////////////////////////
    const [date, setDate] = useState(new Date());
    //for addList form validation///////////////////////////////////////////////////////////
    const [addList, setAddList] = useState({
        isVisible: false,
        project: "",
        date: "",
        content: "",
    });
    //for addContent form validation///////////////////////////////////////////////////////////
    const [addContent, setAddContent] = useState({
        isVisible: false,
        content: "",
        project: "",
    });

    //for displaying presentation
    let [presentation, setPresentation] = useState({
        isVisible: false,
        data: null,
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

    //delete Project Notification
    let [notification, setNotification] = useState({
        isVisible: false,
        projectName: "",
    });
    //useeffect hhoookk///////////////////////////////////////////////////////////
    useEffect(() => {
        //set the title for home page
        document.title = "Home page";
    }, []);

    //function for changing statusMessage isVisible variable
    function changeMessageVisiblity() {
        setStatusMessage({ ...statusMessage, isVisible: false });
    }
    //function for addList template///////////////////////////////
    //add or cancel the addlist form///////////////////////////////////////////////////////////
    function toggleAddlist(visible) {
        setAddList({
            ...addList,
            isVisible: visible,
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
                    isVisible: false,
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
                    isVisible: false,
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
    function toggleContentlist(projectName, visible) {
        setAddContent({
            isVisible: visible,
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
                    isVisible: false,
                });
            } else if (response.error) {
                console.log(response.error);
                setLoadPage(false);
                setStatusMessage({ isVisible: true, message: response.error });
            } else {
                setLoadPage(false);
                setAddContent({
                    ...addContent,
                    isVisible: false,
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
        //trun of the notification
        setNotification({ ...notification, isVisible: false });
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
    async function togglePresentation(visible) {
        let url = "http://localhost:7000/achievement/getAll";
        //when the presentation button is pressed get all the details
        if (visible === true) {
            let result = await getAll(url, token);
            setPresentation({ isVisible: visible, data: result });
        } else {
            setPresentation({ ...presentation, isVisible: visible });
        }
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

    function toggleDeleteNotification(projectName, visibility) {
        console.log(visibility);
        setNotification({
            projectName: projectName,
            isVisible: visibility,
        });
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
                        deleteContent={deleteContentOnclick}
                        toggleDeleteNotification={toggleDeleteNotification}
                    />
                }

                {addList.isVisible && (
                    <AddList
                        toggleAddList={toggleAddlist}
                        addListInputValidate={addListInputValidate}
                        addListFormValidate={addListFormValidate}
                        addList={addList}
                    />
                )}
                {addContent.isVisible && (
                    <AddContent
                        addContent={addContent}
                        toggleContentList={toggleContentlist}
                        addContentFormValidate={addContentFormValidate}
                        addContentInputValidate={addContentInputValidate}
                    />
                )}

                {presentation.isVisible && (
                    <div className="presentationWrapper">
                        <Presentation
                            presentation={presentation}
                            togglePresentation={togglePresentation}
                            getPresentation={getPresentation}
                        />
                        <DisplayToDoList toDoList={toDoList} />
                    </div>
                )}
            </div>
            {notification.isVisible && (
                <DeleteNotification
                    toggleDeleteNotification={toggleDeleteNotification}
                    projectName={notification.projectName}
                    deleteProject={deleteProjectOnclick}
                />
            )}
            {error && <LoginError />}
            <StatusMessage
                message={statusMessage.message}
                isVisible={statusMessage.isVisible}
                changeMessageVisiblity={changeMessageVisiblity}
            />
        </>
    );
};
