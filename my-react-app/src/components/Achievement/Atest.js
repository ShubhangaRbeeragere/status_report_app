import {useState,useEffect} from 'react';
import './A.css';
import deleteData from '../test/deleteData';
import Aitem from './Aitem';

const Apptest = () => { 
  const [users, setUsers] = useState([]);
  useEffect(() => {   
    fetchData();

    

  }, [users]);

  const fetchData = async () => {
    await fetch("http://localhost:8080/achievements/getDetail")
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
            "http://localhost:8080/achievements/deleteA",
            jsonData
        );
        if (response === "error") {
            console.log("deleteData: error occured");
        } else if (response.error) {
          
       
            console.log(response.error);
        } else {
     
       
        } };
          deleteDatas();  }


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
    //       axios.put('http://localhost:8080/achievements/updateDetail', data).then(res => {
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

  return (
    <div className="mtest">
  

    
        {users.map(user => (
          <Aitem
            Akey={user.id}
            id={user.achievement_id}
            achievement_name = {user.achievement_name}         
            content={user.content}
            date={user.date}
            onDelete={deleteOnclick}  
          

        
          />
        ))}

    </div>
  );
};

export default Apptest;