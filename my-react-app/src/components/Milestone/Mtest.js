import {useState,useEffect} from 'react';
import './m.css'
import deleteData from '../test/deleteData';
import Mitem from './Mitem';


const Apptest = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
    

  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:8080/milestones/getMilestones")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteOnclick =  (id)  => {
    let jsonData = {
      id:id,
    
   };
    
    let deleteDatas = async () => {

        let response = await deleteData(
            "http://localhost:8080/milestones/deleteM",
            jsonData
        );
        if (response === "error") {
            
            console.log("deleteData: error occured");
        } else if (response.error) {
          
            console.log(response.error);
        } else {
          console.log("successfully deleted");
            
       
        } };
          deleteDatas(); 
         }


    //       const [title, setTitle] = useState('');
    //       const [content, setContent] = useState('');
    //       const [loading, setLoading] = useState(false);
    //       const [isError, setIsError] = useState(false);
   
         
    //  const updateOnclick = (title,content)=> {
       

    //       setLoading(true);
    //       setIsError(false);
    //       const data = {
    //         title: title,
    //         content: content
    //       }
    //       axios.put('http://localhost:8080/milestones/updateMILESTONE', data).then(res => {
    //         setUsers(res.data);
    //         setTitle('');
    //         setContent('');
    //         setLoading(false);
    //       }).catch(err => {
    //         setLoading(false);
    //         setIsError(true);
    //       });
    //     }

    //     const updateMilestone = (milestone_id,updatedMilestone) => {
    //       setUsers(users.map((user)=> user.id === milestone_id ? updatedMilestone : user))
    //   }
    // const updateMilestone = (id,updatedMilestone) => {
    //         setUsers(users.map((user)=> user.id === id ? updatedMilestone : user))
    //     }

  return (
    <div className="mtest">
  

      
        {users.map(user => (
          <Mitem 
           Mkey={user.id}   
            id={user.milestone_id} 
                  
            title = {user.title}         
            content={user.content}
            onDelete={deleteOnclick}  
    
          />
        ))}
   
    </div>
  );
};

export default Apptest;