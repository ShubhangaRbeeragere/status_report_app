import React,{useState,useEffect} from 'react';
import './Achievements.css';
import Achievements from './Achievement';
import AAccordion from './Aaccordion';




function AchievementTest(props) {



 

 const [openAchievements,setOpenAchievements] = useState(false);

   
    return (
        <div className='Ahome'>

        <div>
         <div className='AAcordion'>
         < AAccordion />
        
        </div>
</div>
      <div >

      <button className="Abutton"  onClick={()=>{setOpenAchievements(true)}}>ADD</button> 
        {openAchievements &&  <Achievements  closeAchievements={setOpenAchievements}  />}
      </div>



         </div>
   
    
    );
             }
export default AchievementTest;
