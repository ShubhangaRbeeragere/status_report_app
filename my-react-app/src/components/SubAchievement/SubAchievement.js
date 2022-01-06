import React,{useState} from 'react';
import './SubAchievement.css';



function SubAchievements () {



const initialValues = {
  Subachievement: '',
  Content: '',
};


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
      alert(`
      Sub Achievement Added
     
    `);
    };

    return (
      <div >
        <form className='SubAchievement' onSubmit={onSubmit}  >
  
            <div className='name' >
                <input type="text" value={values.Subachievement}
            onChange={handleInputChange}
            name="Subachievement" placeholder='Enter Sub Achievement...'></input>

                <input type="text" value={values.Content}
            onChange={handleInputChange}
            name="Content" placeholder='Enter Content...'></input>
            </div>
        
            <div>
          <button className='buttons' type="submit" value="Save"> SUBMIT  </button>
        </div>

        
      </form>
      </div>

         );

}


export default SubAchievements;