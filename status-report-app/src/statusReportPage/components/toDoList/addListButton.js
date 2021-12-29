export const AddListButton = (props) => {
   return(
       <div className="buttonHolder">
            <button className="addListButton" onClick={() => {props.toggleAddList()}}>Add</button>
       </div>
   ) 
}