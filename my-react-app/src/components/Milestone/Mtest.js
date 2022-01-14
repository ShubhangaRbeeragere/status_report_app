import {useState,useEffect,useRef} from 'react';
import './m.css'

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


    return (
        
      <div className='mtest'>
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li 
              key={user.id}>
                  <h4>{user.title} </h4>               
                  <p> <div className="right">
            <i class="far fa-trash-alt" ></i>
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