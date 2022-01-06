import React,{useState} from 'react';
import './Achievements.css'

function AchievementHome() {
    const [achievements,setAchievements] = useState([])
    const [achievement,setAchievement] = useState('')
    return (
        <div className='Ahome'>
               <div className="box">
        <h1>ACHIEVEMENTS</h1>
      </div>

      <div className="input">
        <input value={achievement}  onChange={(e)=>setAchievement(e.target.value)} type="text" placeholder=" Add Achievement..." />
        <button className="Abutton" onClick={()=>setAchievements([...achievements,achievement])} >ADD</button>
      </div>
      { achievements.map((value)=>{
             return(
      <div >
        <div className="ment">
          <div className="left">
            <p>{value}</p>
          </div>
         

              
          
          </div>
         </div>) 
    })} </div>
   
    );
    }
export default AchievementHome
