import {useState,useEffect} from 'react';
import './m.css'

//get /////////////////////////////////
const UsingFetch = () => {
    const [users, setUsers] = useState([])
  
    const fetchData = () => {
      fetch("http://localhost:8080/milestones/getMilestones")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])


      //   useEffect(() => {
      //     // DELETE request using fetch with error handling
      //     fetch('https://localhost:8080/milestones/deleteMILESTONES', { method: 'DELETE' })
      //         .then(async response => {
      //             const data = await response.json();
      
      //             // check for error response
      //             if (!response.ok) {
      //                 // get error message from body or default to response status
      //                 const error = (data && data.message) || response.status;
      //                 return Promise.reject(error);
      //             }
      
      //             setStatus('Delete successful');
      //         })https://jsonplaceholder.typicode.com/users/rrorMessage(error);
      //             console.error('There was an error!', error);
      //         });
      // }, []);

      // const onDelete = async (id) => {

      //     await fetch (`http://localhost:8080/milestones/deleteMILESTONES/${id}`,{

      //     method : 'DELETE'
      //https://jsonplaceholder.typicode.com/users/
      //     })
      //     .then((res)=> {

      //         if(res.status !== 200){

      //           return
      //         }else{
      //           setUsers(users.filter((user)=>{

      //             return user.id !== id;

      //           }
                
      //           ))
      //         }

      //     })
      //     .catch((err) => {

      //       console.log(err);
      //     })
          

      // }

      // const HandleOnDelete = () => {

      //   onDelete(id);
      // }


  
    //   const onDelete = async (id) => {
    //     await fetch(`http://localhost:8080/milestones/delete${id}` ,{
    //       method: "DELETE",
    //       mode: 'cors', // no-cors, *cors, same-origin

    //     })
    //       .then((res) => {
    //         if (res.status !== 200) {
    //           return;
    //         } else {
    //           setUsers(
    //             users.find((user) => {
    //               return user.id !== id;
    //             })
    //           );
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(users);
    //         console.log(err);
    //       });
    //   };
    
    // function alertt(id) {

    //   alert(id)
    // }

      
    return (
        
      <div className='mtest'>
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li
              key={user.id}>
                  <h4>{user.title} </h4>               
                  <p> <div className="right">
            <button className="far fa-trash-alt" ></button>
          </div>{user.content}</p>


                <br></br>


              
              
              
              
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
  
  export default UsingFetch;