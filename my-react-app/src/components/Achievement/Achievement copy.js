import React,{useState,useRef} from 'react';
import './Achievements.css';



export default function Achievements ({props,closeAchievements}) {
 
const initialValues = {
  achievement: "",
  content: "",
  date:""
};


  const [values, setValues] = useState(initialValues);

  const achievementInputRef = useRef(); 
  const contentInputRef = useRef(); 
  const dateInputRef = useRef(); 

  const handleInputChange = (e) => {
      //const name = e.target.name 
      //const value = e.target.value 
      const { name, value } = e.target;
  
      setValues({
        ...values,
        [name]: value,
      });
    };
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(values);

        const enteredachievement = achievementInputRef.current.value;
        const enteredcontent = contentInputRef.current.value;
        const entereddate = dateInputRef.current.value;

        const Data = {
                      achievement : enteredachievement,
                      content     : enteredcontent,
                      date        : entereddate


        };
       props.onAddData(Data);
      }
    

  



    return (
     
        <form className='Achievement'  onSubmit={(onSubmit)}>
  
            <div className='name' >
                <button className='xbutton' onClick={()=> closeAchievements(false)}>X</button>
                <label><h4 className='aHeader'>Achievement</h4></label>
                <input className='aInput' type="text" value={values.achievement}
            onChange={handleInputChange}
            name="achievement" ref={achievementInputRef} placeholder='Enter Achievement...'></input>
   
               <label> <h4 className='cHeader'>Content</h4></label>
                <input className='cInput' type="text" value={values.content}
            onChange={handleInputChange}
            name="content" ref={contentInputRef} placeholder='Enter content...'></input>

                <label><h4 className='dHeader'>Date</h4></label>
                <input className='dInput' type="date" value={values.date}
            onChange={handleInputChange}
            name="date" ref={dateInputRef}></input>
            </div>
     
            <div>
          <button className='buttons'>SUBMIT  </button>
        </div>
    

        
      </form>


         
    );
}



