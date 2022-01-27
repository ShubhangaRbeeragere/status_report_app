import React,{useState} from 'react';
import './m.css';



export default function Milestones (props) {

  const closeMilestones = props.closeMilestones;


  


  const initialValues = {
    title: "",
    content: "",
  
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



  async function postData(url, data={}) {


    try {
      let response =  await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
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

      const onAddData = (e) => {


      postData('http://localhost:8080/milestones/createMILESTONE',values)
        
        .then(values => {
          console.log(values); // JSON data parsed by `data.json()` call
        
        });  e.preventDefault();}
      
  
    return (
   
        <form className='Milestones'  onSubmit={(onAddData)}>
  
            <div className='Mname' >
                <button className='xbutton' onClick={()=> closeMilestones(false)}>X</button>
                <label><h4 className='aHeader'>Milestone</h4></label>
                <input className='aInput' type="text" 
             placeholder='Enter Title...' onChange={handleInputChange} name="title"></input>
   
               <label> <h4 className='cHeader'>Content</h4></label>
                <input className='cInput' type="text" placeholder='Enter content...' onChange={handleInputChange} name="content"></input>
            </div>
     
            <div>
          <button className='Mbuttons' >SUBMIT  </button>

        </div>
    

        
      </form>        
    );
}



