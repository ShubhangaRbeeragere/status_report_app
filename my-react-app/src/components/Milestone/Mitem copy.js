import deleteData from '../test/deleteData';
import {useState} from 'react'
// function Mitem(props) {

//     const title = props.title;
//     const content = props.content;

//     return <div>
        
//           <h4>{title}</h4>          
          
//           <h5>{content}</h5>
        
//           </div>
// }

export default function Testfortest(id,title,content,deletebutton) {
       
 const [users,setUserss] = useState ([]);
    let jsonData = {
      id:id,

   } 
       
function DeleteOnclick( ) {




    
    //delete the project and remove the item only when succeeds
    let deleteDatas = async () => {
        setUserss(true);
        let response = await deleteData(
            "http://localhost:8080/milestones/deleteM",
            jsonData
        );
        if (response === "error") {
           
            console.log("deleteData: error occured");
        } else if (response.error) {
            setUserss(false);
            console.log(response.error);
        } else {
            setUserss(false);
    
            
        
        }
    };
    deleteDatas();
};
    return (
        <div className='list'>
           
            <span>{title}</span>
            <span>{content}</span>
            <span>
                <button>edit</button>
                <button onClick={deleteData}>{deletebutton}</button>
            </span>
        </div>
    )
    }


// export default Mitem;
