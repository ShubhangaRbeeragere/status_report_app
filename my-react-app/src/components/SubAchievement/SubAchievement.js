import React,{useState} from 'react';
import './SubAchievement.css';


const initialValues = {
  SubAchievement: "",
  Content: "",
};


export default function SubAchievements () {


  const [values, setValues] = useState(initialValues);

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
      console.log("refresh prevented");
    };

    return (
        <form className='SubAchievement' onSubmit={(onSubmit)} >
  
            <div className='name' >
                <label><h4>Sub Achievement</h4></label>
                <input type="text" value={values.SubAchievement}
            onChange={handleInputChange}
            name="SubAchievement" placeholder='Enter Sub Achievement...'></input>
   
               <label> <h4>Content</h4></label>
                <input type="text" value={values.Content}
            onChange={handleInputChange}
            name="Content" placeholder='Enter Content...'></input>
            </div>
        
            <div>
          <button className='buttons' type="submit"> SUBMIT  </button>
        </div>

        
      </form>

         );

}




