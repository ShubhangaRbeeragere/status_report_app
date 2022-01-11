import React,{useState,useEffect} from 'react';
import './Achievements.css';
import Achievements from './Achievement';
import AAccordion from './Aaccordion';
import addData from './test';




function AchievementTest(props) {


  function addDataHandler(Data){

    addData('http://localhost:8080/achievements/createADETAIL',

    );

  }
    const [openAchievements,setOpenAchievements] = useState(false);


    // function deleteAchievement (id) {

    //     const updatedAchievement = [...props.alists].filter((props.alist) => alist.id !== id)

    // }
    
   
    return (
        <div className='Ahome'>
               <div className="box">
        <h1>ACHIEVEMENTS</h1>
      </div>
        <div>
         <div className='AAcordion'>
         < AAccordion />
         {/* <button className='AAcordionButton' onClick={() => deleteAchievement(props.alist.id)} >X</button> */}
        
        </div>
</div>
      <div >

      <button className="Abutton"  onClick={()=>{setOpenAchievements(true)}}>ADD</button> 
        {openAchievements &&  <Achievements  closeAchievements={setOpenAchievements} onAddData={addDataHandler} />}
      </div>



         </div>
   
    
    );
             }
export default AchievementTest;
