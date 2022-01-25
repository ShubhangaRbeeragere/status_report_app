import React,{useContext} from 'react';
import './m.css';



export default function EditMilestones (props) {

  const closeMilestones = props.closeMilestones;

  const {updateMilestone} = useContext ();

  
    return (
   
        <form className='Milestones' >
  
            <div className='Mname' >
                <button className='xbutton' onClick={()=> closeMilestones(false)}>X</button>
                <label><h4 className='aHeader'>Milestone</h4></label>
                <input className='aInput' type="text" 
             placeholder='Enter Title...' ></input>
   
               <label> <h4 className='cHeader'>Content</h4></label>
                <input className='cInput' type="text" placeholder='Enter content...' ></input>
            </div>
     
            <div>
          <button className='Mbuttons' >UPDATE  </button>

        </div>
    

        
      </form>        
    );
}



