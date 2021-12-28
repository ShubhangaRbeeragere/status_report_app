export const addList = (props) => {
   return(
       <div className="addListWrapper">
           <form action="*" onSubmit={() => {console.log("form submitted")}}>
               <label htmlFor="">
                   Project:
                   <input type="text" name="project" />
               </label>
               <label htmlFor="">
                    <input type="date" name="date" />
               </label>
               <input type="submit" value="Submit"/>
           </form>
       </div>
   ) 
}