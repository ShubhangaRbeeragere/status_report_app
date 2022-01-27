import {useState,useEffect} from 'react';
import './m.css'
import deleteData from '../test/deleteData';
import Mitem from './Mitem';


function Apptest () { 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("http://localhost:8080/milestones/getMilestones");
      const data = await response.json();

      // store the data into our books variable
      setUsers(data) ;
    }
  }, [users]); // <- you may need to put the setBooks function in this array
  // useEffect(() => {
  //   fetchData();
    

  // }, []);

  // const fetchData = async () => {
  //   await fetch("http://localhost:8080/milestones/getMilestones")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // async function fetchData() {
  //   const response = await fetch("http://localhost:8080/milestones/getMilestones");
  //   const data = await response.json();

  //   // store the data into our books variable
  //   setUsers(data) ;
  // }

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