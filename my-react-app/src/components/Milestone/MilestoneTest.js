import React,{useState} from 'react';
import './m.css';
import Milestones from './Milestones';
import UsingFetch from './Mtest';




function MilestoneTest () {




 function addDataHandler(Data){

        fetch('https://localhost:8080/milestones/createDETAIL',
        {
          method:'POST',
          body:JSON.stringify(Data),
          headers:{
              'Content-Type': 'application/json'
 }
    
 }
     
 );
      

 }

 const [openMilestones,setOpenMilestones] = useState(false);
   
    return (
        <div className='Mhome'>

        <div>
         <div className='AAcordion'>
         < UsingFetch />
        
        </div>
</div>
      <div >

      <button className="Mbutton"  onClick={()=>{setOpenMilestones(true)}}>ADD</button> 
        {openMilestones &&  <Milestones  closeMilestones={setOpenMilestones} onAddData={addDataHandler} />}
      </div>



         </div>
   
    
    );
             }
export default MilestoneTest;
