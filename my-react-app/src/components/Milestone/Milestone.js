import React,{useState} from 'react';
import './Milestone.css';


const initialValues = {
    Title: "",
    Content: "",
  };
  
  


export default function Milestones () {

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
        <form className='Milestone'  onSubmit={(onSubmit)}>
  
            <div className='name' >
                <label><h4>Title</h4></label>
                <input type="text" value={values.Title}
            onChange={handleInputChange}
            name="Title" placeholder='Enter Milestone...'></input>
   
               <label> <h4>Content</h4></label>
                <input type="text" value={values.Content}
            onChange={handleInputChange}
            name="Content" placeholder='Enter Content...'></input>

            </div>
        
            <div>
          <button className='buttons'>SUBMIT  </button>
        </div>

        
      </form>

         );

}



