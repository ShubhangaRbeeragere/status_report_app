import React,{useState,useEffect} from 'react';
import './s.css';

import SubAccordion from './Subaccordion';
import SubAchievements from './subachievements';




function SubAchievementTest (props) {




 function addDataHandler(Data){

        fetch('https://localhost:8080/subachievements/createDETAIL',
        {
          method:'POST',
          body:JSON.stringify(Data),
          headers:{
              'Content-Type': 'application/json'
 }
    
 }
     
 );
      

 }

 const [openSubAchievements,setOpenSubAchievements] = useState(false);
   
    return (
        <div className='Shome'>
               <div className="box">
        <h1>SUB ACHIEVEMENTS</h1>
      </div>
        <div>
         <div className='AAcordion'>
         < SubAccordion />
        
        </div>
</div>
      <div >

      <button className="Abutton"  onClick={()=>{setOpenSubAchievements(true)}}>ADD</button> 
        {openSubAchievements &&  <SubAchievements  closeSubAchievements={setOpenSubAchievements} onAddData={addDataHandler} />}
      </div>



         </div>
   
    
    );
             }
export default SubAchievementTest;
