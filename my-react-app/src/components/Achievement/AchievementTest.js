import React,{useState} from 'react';
import './A.css';
import Achievements from './Achievement';
import Apptest from './Atest';




function AchievementTest(props) {



 

 const [openAchievements,setOpenAchievements] = useState(false);

   
    return (
        <div className='Mhome'>

        <div>
         <div className='AAcordion'>
         < Apptest />
        
        </div>
</div>
      <div >

      <button className="Abutton"  onClick={()=>{setOpenAchievements(true)}}>+</button> 
        {openAchievements &&  <Achievements  closeAchievements={setOpenAchievements}  />}
      </div>



         </div>
   
    
    );
             }
export default AchievementTest;
