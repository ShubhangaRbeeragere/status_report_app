export const AddList = (props) => {
    let inputValidate = props.addListInputValidate;
    let formValidate = props.addListFormValidate;
    let addList = props.addList;

   return(
       <div className="addListWrapper">
           <form action="#" onSubmit={(e) => {formValidate(e)}}>
               <button className="cancelButton" onClick={() => {props.toggleAddList()}}>
                    <i className="fas fa-times"></i>
               </button>
               <label>
                   Project:<br/>
                   <input type="text" value={addList.project} name="project" onChange={(e) => {inputValidate(e)}}/>
               </label>
               <label>
                    Date:<br/>
                    <input type="date" value={addList.date} name="date" onChange={(e) => {inputValidate(e)}}/>
               </label>
               <label>
                    Content:<br/> 
                    <textarea name="content" value={addList.content} id="content" cols="30" rows="10" onChange={(e) => {inputValidate(e)}}></textarea>
               </label>
               <input className="submitButton" type="submit" value="Submit"/>
           </form>
       </div>
   ) 
}