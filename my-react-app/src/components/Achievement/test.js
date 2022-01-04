import React, { useState } from "react";
import './Achievements.css';

const initialValues = {
    SubAchievement: "",
    Content: "",
  };


export default function Test  (){

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
  

    return (
        <form>
          <input
            value={values.SubAchievement}
            onChange={handleInputChange}
            name="SubAchievement"
            label="SubAchievement"
          />
          <input
            value={values.Content}
            onChange={handleInputChange}
            name="Content"
            label="Content"
          />
          
          <button type="submit">Save </button>
        </form>
  );
}












       



