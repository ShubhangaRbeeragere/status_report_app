import { Content } from "./content";
import { AddListButton } from "./addListButton";
export const ToDoList = (props) => {
  let toDoList = props.toDoList;
  let deleteProject = props.deleteProject;

  let toDoItems =
    toDoList &&
    toDoList.map((list) => (
      <div className="item" key={list.list_id.toString()}>
        <h3>
          {list.title}
          <button
            className="removeProjectButton"
            onClick={() => {
              deleteProject(list.title);
            }}
          >
            <i className="fas fa-minus"></i>
          </button>
        </h3>
        <h4>{list.date}</h4>
        <Content
          project={list.title}
          deleteContent={props.deleteContent}
          contentArray={list.contentKey}
        />
      </div>
    ));

  return (
    <div className="toDoList boxes">
      <h2>Issues and Risk</h2>
      {toDoList && toDoItems}
      {toDoList && <AddListButton toggleAddList={props.toggleAddList} />}
    </div>
  );
};
