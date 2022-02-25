import { DisplayContent } from "./displayContent";
export const DisplayToDoList = (props) => {
    let toDoList = props.toDoList;
    let toDoItems =
        toDoList &&
        toDoList.map((list) =>
            list.contentKey.length === 0 ? (
                ""
            ) : (
                <div className="item" key={list.list_id.toString()}>
                    <h3>{list.title}</h3>
                    <h4>{list.date}</h4>
                    <DisplayContent
                        project={list.title}
                        contentArray={list.contentKey}
                    />
                </div>
            )
        );

    return (
        <div className="toDoList boxes">
            <div className="toDoList-header">
                <h2>Issues and Risks</h2>
            </div>
            <div className="itemWrapper">{toDoList && toDoItems}</div>
        </div>
    );
};
