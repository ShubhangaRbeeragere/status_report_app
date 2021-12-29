export const AddList = (props) => {
   return(
       <div className="addListWrapper">
           <form action="*" onSubmit={() => {console.log("form submitted")}}>
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
                    <input type="text" name="content" />
               </label>
               <input type="submit" value="Submit"/>
           </form>
       </div>
   ) 
}