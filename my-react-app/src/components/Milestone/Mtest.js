import {useState,useEffect} from 'react';
import './m.css'
import User from './Mitem';
import deleteData from '../test/deleteData';

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
        setUsers(true);
        let response = await deleteData(
            "http://localhost:8080/milestones/deleteM",
            jsonData
        );
        if (response === "error") {
           
            console.log("deleteData: error occured");
        } else if (response.error) {
            setUsers(false);
            console.log(response.error);
        } else {
            setUsers(false);
       
        } };
          deleteDatas();
        }


  return (
    <div className="mtest">
  

      <div>
        {users.map(user => (
          <User
          id={user.milestone_id}
            key={user.id}
            title = {user.title}            
            content={user.content}
            onDelete={deleteOnclick}    
          />
        ))}
      </div>
    </div>
  );
};

export default Apptest;