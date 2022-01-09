import React,{useState} from 'react';
import './Achievements.css';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";


function AchievementHome() {

  function AAccordion(prop) {
    return (
      <div stlye={{}}>
      <Accordion style={{ width: 774 }}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography
            style={{
              fontWeight: 15,color:'black'
            }}
          >
            {prop.value}
          </Typography>
        </AccordionSummary> 
        <div className='Subaccordion'>
        <AccordionDetails>
         
          <Typography style={{color:'white'}}>Sub Achievement one </Typography>
          
        </AccordionDetails></div>
      </Accordion>
    </div>
  );
}
  
    const [achievements,setAchievements] = useState([])
    const [achievement,setAchievement] = useState('')
    return (
        <div className='Ahome'>
               <div className="box">
        <h1>ACHIEVEMENTS</h1>
      </div>

      <div className="input">
        <input value={achievement}  onChange={(e)=>setAchievement(e.target.value)} type="text" placeholder=" Add Achievement..." />
        
      </div>
      { achievements.map((value)=>{
             return(
      
        <div className="accordion">
          <div >
            
            <AAccordion value={value}/>
            
          </div>
          </div>
         ) 
    })}<button className="Abutton" onClick={()=>setAchievements([...achievements,achievement])} >ADD</button> </div>
   
    );
    }
export default AchievementHome
