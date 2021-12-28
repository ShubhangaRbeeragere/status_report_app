import { Content } from "./content";
import { AddListButton } from "./addListButton";
export const ToDoList = (props) => {
        let toDoList = props.toDoList;

        let toDoItems = toDoList.map(list => 
            <div className="item" key={list.list_id.toString()}>
                <h3>{list.title}</h3>
                <h4>{list.date}</h4>
                <Content contentArray = {list.contentKey}/>
            </div>
        )

    return(
        <div className="toDoList boxes">
            <h2>Issues and Risk</h2>
            {toDoItems}
            <AddListButton/>
        </div>
    )
}