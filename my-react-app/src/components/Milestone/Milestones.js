import React,{useRef} from 'react';
import './m.css';



export default function Milestones (props) {

  const closeMilestones = props.closeMilestones;


  const titleInputRef = useRef(); 
  const contentInputRef = useRef(); 


    const onSubmit = (e) => {
      e.preventDefault();

     
      
    
        const enteredtitle = titleInputRef.current.value;
        const enteredcontent = contentInputRef.current.value;

        const MilestoneData = {
                      title : enteredtitle,
                      content     : enteredcontent,


        };
      props.onAddData(MilestoneData);
      console.log(MilestoneData);
    
      }



    return (
   
        <form className='Milestones'  onSubmit={(onSubmit)}>
  
            <div className='Mname' >
                <button className='xbutton' onClick={()=> closeMilestones(false)}>X</button>
                <label><h4 className='aHeader'>Milestone</h4></label>
                <input className='aInput' type="text" 
            ref={titleInputRef} placeholder='Enter Title...'></input>
   
               <label> <h4 className='cHeader'>Content</h4></label>
                <input className='cInput' type="text"  ref={contentInputRef} placeholder='Enter content...'></input>
            </div>
     
            <div>
          <button className='Mbuttons' >SUBMIT  </button>

        </div>
    

        
      </form>        
    );
}



