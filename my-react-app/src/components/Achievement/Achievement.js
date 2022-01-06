import React,{useState} from 'react';
import './Achievements.css';


const initialValues = {
  Achievement: "",
  Content: "",
  Date:""
};

export default function Achievements () {

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
      console.log(values);
    };



    return (
        <form className='Achievement'  onSubmit={(onSubmit)}>
  
            <div className='name' >
                <label><h4>Achievement</h4></label>
                <input type="text" value={values.Achievement}
            onChange={handleInputChange}
            name="Achievement" placeholder='Enter Achievement...'></input>
   
               <label> <h4>Content</h4></label>
                <input type="text" value={values.Content}
            onChange={handleInputChange}
            name="Content" placeholder='Enter content...'></input>

                <label><h4>Date</h4></label>
                <input type="date" value={values.Date}
            onChange={handleInputChange}
            name="Date" ></input>
            </div>
        
            <div>
          <button className='buttons'>SUBMIT  </button>
        </div>

        
      </form>

         );

}



