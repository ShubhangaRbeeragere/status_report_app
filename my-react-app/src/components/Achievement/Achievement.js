import React,{useRef} from 'react';
import './Achievements.css';



export default function Achievements (props) {

  const closeAchievements = props.closeAchievements;


  const achievementInputRef = useRef(); 
  const contentInputRef = useRef(); 
  const dateInputRef = useRef(); 


    const onSubmit = (e) => {
      e.preventDefault();

     
        const EnteredAchievement = achievementInputRef.current.value;
        const EnteredContent = contentInputRef.current.value;
        const EnteredDate = dateInputRef.current.value;

        const Data = {
                      achievement : EnteredAchievement,
                      content     : EnteredContent,
                      date        : EnteredDate


        }; 
             console.log("this" ,  Data);
      props.onAddData(Data);

    
      }

    return (
   
        <form className='Achievement'  onSubmit={(onSubmit)}>
  
            <div className='name' >
                <button className='xbutton' onClick={()=> closeAchievements(false)}>X</button>
                <label><h4 className='aHeader'>Achievement</h4></label>
                <input className='aInput' type="text" 
            ref={achievementInputRef} placeholder='Enter Achievement...'></input>
   
               <label> <h4 className='cHeader'>Content</h4></label>
                <input className='cInput' type="text"  ref={contentInputRef} placeholder='Enter content...'></input>

                <label><h4 className='dHeader'>Date</h4></label>
                <input className='dInput' type="date"  ref={dateInputRef}></input>
            </div>
     
            <div>
          <button className='buttons' >SUBMIT  </button>

        </div>
    

        
      </form>



         
    );
}



