import { Content } from "./content";
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
            <h1>ToDoList</h1>
            {toDoItems}
        </div>
    )
}