import React,{useRef} from 'react';
import './s.css';



export default function SubAchievements (props) {

  const closeSubAchievements = props.closeSubAchievements;


  const subachievementInputRef = useRef(); 
  const contentInputRef = useRef(); 


    const onSubmit = (e) => {
      e.preventDefault();

     
      
    
        const enteredsubachievement = subachievementInputRef.current.value;
        const enteredcontent = contentInputRef.current.value;

        const SubData = {
                      subachievement : enteredsubachievement,
                      content     : enteredcontent,


        };
      props.onAddData(SubData);
      console.log(SubData);
    
      }



    return (
   
        <form className='SubAchievement'  onSubmit={(onSubmit)}>
  
            <div className='name' >
                <button className='xbutton' onClick={()=> closeSubAchievements(false)}>X</button>
                <label><h4 className='aHeader'>Sub Achievement</h4></label>
                <input className='aInput' type="text" 
            ref={subachievementInputRef} placeholder='Enter Sub Achievement...'></input>
   
               <label> <h4 className='cHeader'>Content</h4></label>
                <input className='cInput' type="text"  ref={contentInputRef} placeholder='Enter content...'></input>
            </div>
     
            <div>
          <button className='buttons' >SUBMIT  </button>

        </div>
    

        
      </form>        
    );
}



