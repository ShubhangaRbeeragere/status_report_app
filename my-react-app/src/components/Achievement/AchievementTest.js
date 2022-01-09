import React,{useState,useEffect} from 'react';
import './Achievements.css';
import Achievements from './Achievement';
import AAccordion from './Aaccordion';



function AchievementTest(props) {

    const [loading,setLoading] = useState(true);
    const [loadedData,setLoadedData] = useState([]);
  
    useEffect(() => {
      setLoading(true);
  
      fetch('https://my-react-app-ef4bc-default-rtdb.firebaseio.com/testdata.json'
  ).then((response) => {
      return response.json();
  })
    .then((data)    => {

      const alists = [];
      for (const key in data){

          const alist = {

            id:key,
            ...data[key]

          };

          alists.push(alist);

      }


      setLoading(false);
      setLoadedData(alists);
  });
  
  
    },[]);

      if (loading) {
          <section>

              <p>Loading....</p>

          </section>

      }



  function addDataHandler(Data){

    fetch('https://my-react-app-ef4bc-default-rtdb.firebaseio.com/testdata.json',
    {
      method:'POST',
      body:JSON.stringify(Data),
      headers:{
          'Content-Type': 'application/json'



      }

    }
 
    );

  }




    const [openAchievements,setOpenAchievements] = useState(false);


    return (
        <div className='Ahome'>
               <div className="box">
        <h1>ACHIEVEMENTS</h1>
      </div>
        <div>
         <div className='AAcordion'>
         < AAccordion />
      

            <button className='AAcordionButton' >X</button>

        
        </div>
</div>
      <div >

      <button className="Abutton"  onClick={()=>{setOpenAchievements(true)}}>ADD</button> 
        {openAchievements &&  <Achievements  closeAchievements={setOpenAchievements} onAddData={addDataHandler} />}
      </div>



         </div>
   
    
    );
             }
export default AchievementTest;
