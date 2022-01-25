import React,{useState} from 'react';
import './Achievements.css';


export default function Achievements (props) {

  const closeAchievements = props.closeAchievements;

  const refreshPage = () =>{
    window.location.reload(false);
  }
  

  const initialValues = {
    achievement_name: "",
    content: "",
    date:""
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


   async function postData(url, data = {}) {


    try {
      let response =  await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      headers: {
        "Content-Type": "application/json",
       
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  
  console.log(response.status);
  if (!response.ok) {
    throw new Error("ERROR");
  }
  let result = await response.json();
  console.log("addData response: ", result);
  return result;
  } catch (error) {
  console.log(error);
  return "error";
  }
  }
  

      
     
      const onSubmit = (e) => {

      postData('http://localhost:8080/achievements/createADETAIL',values)
        
        .then(values => {
          console.log(values); // JSON data parsed by `data.json()` call
        
        });  e.preventDefault();}
      


     
      //   const EnteredAchievement = achievementInputRef.current.value;
      //   const EnteredContent = contentInputRef.current.value;
      //   const EnteredDate = dateInputRef.current.value;

      //        console.log("this" ,  Data);
      // props.onAddData(Data);

      // try {
      //   const response = await fetch('http://localhost:8080/achievements/DETAIL', {
      //     method: "delete"
      //   });
      
      //   if (!response.ok) {
      //     const message = 'Error with Status Code: ' + response.status;
      //     throw new Error(message);
      //   }
      
      //   const data = await response.json();
      //   console.log(data);
      // } catch (error) {
      //   console.log('Error: ' + err);
      // }
      

    return (
   
        <form className='Achievement'  onSubmit={(onSubmit)}>
  
            <div className='name' >
                <button className='xbutton' onClick={()=> closeAchievements(false)}>X</button>
                <label><h4 className='aHeader'>Achievement</h4></label>
                <input className='aInput' type="text" 
           placeholder='Enter Achievement...'  onChange={handleInputChange} name="achievement_name" ></input>
   
               <label> <h4 className='cHeader'>Content</h4></label>
                <input className='cInput' type="text"  onChange={handleInputChange} name="content" placeholder='Enter content...'></input>

                <label><h4 className='dHeader'>Date</h4></label>
                <input className='dInput' type="date"  onChange={handleInputChange} name="date"></input>
            </div>
     
            <div>
          <button className='buttons' onClick={refreshPage}>SUBMIT  </button>

        </div>
    

        
      </form>



         
    );
}



