export const AddList = (props) => {
   return(
       <div className="addListWrapper">
           <form action="#" onSubmit={() => {props.toggleAddList()}}>
               <button className="cancelButton">
                    <i className="fas fa-times"></i>
               </button>
               <label>
                   Project:<br/>
                   <input type="text" name="project" />
               </label>
               <label>
                    Date:<br/>
                    <input type="date" name="date" />
               </label>
               <label>
                    Content:<br/> 
                    <textarea name="content" id="content" cols="30" rows="10"></textarea>
               </label>
               <input className="submitButton" type="submit" value="Submit"/>
           </form>
       </div>
   ) 
}