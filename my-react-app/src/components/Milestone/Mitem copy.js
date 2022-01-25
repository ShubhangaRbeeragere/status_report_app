import deleteData from '../test/deleteData';
import {useState} from 'react'

export default function Testfortest(id,title,content,deletebutton) {
       
 const [users,setUserss] = useState ([]);
    let jsonData = {
      id:id,

   } 
       
function DeleteOnclick( ) {

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
