import { Content } from "./content";
import { AddListButton } from "./addListButton";
export const ToDoList = (props) => {
    let toDoList = props.toDoList;
    let deleteProject = props.deleteProject;
    let toDoItems =
        toDoList &&
        toDoList.map((list) => (
            <div className="item" key={list.list_id.toString()}>
                <button
                    title="delete project"
                    className="removeProjectButton"
                    onClick={() => {
                        deleteProject(list.title);
                    }}
                >
                    <i className="fas fa-times"></i>
                </button>
                <h3>{list.title}</h3>
                <h4>{list.date}</h4>
                <Content
                    project={list.title}
                    deleteContent={props.deleteContent}
                    contentArray={list.contentKey}
                />
                <button
                    title="Add Content"
                    className="addContentButton"
                    onClick={() => {
                        props.toggleContentlist(
                            list.title,
                            "form-left-right-one",
                            "wrapper-fade-in"
                        );
                    }}
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        ));

    return (
        <div className="toDoList boxes">
            <div className="toDoList-header">
                <h2>Issues and Risks</h2>
                {toDoList && (
                    <AddListButton toggleAddList={props.toggleAddList} />
                )}
            </div>
            <div className="itemWrapper">{toDoList && toDoItems}</div>
        </div>
    );
};
