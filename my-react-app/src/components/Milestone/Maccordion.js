import React,{useState,useEffect} from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import './m.css'
import Mlist from './Mlist';


export default function MAccordion (props) {

function Mtestt (props) {
    
  }
    const [loading,setLoading] = useState(true);
    const [loadedData,setLoadedData] = useState([]);
  
    useEffect(() => {
      setLoading(true);
  
      fetch('http://localhost:8080/milestones/getMilestones'
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






        return (
          <li className='Maccordion'>
          <Accordion >

         
          
          <Mlist alists={loadedData}/>
              
          
          
          {/* <div className='Subaccordion'>
      
          <AccordionDetails>
       
          <Typography style={{color:'white'}}>Sub Achievement one </Typography>
        
          </AccordionDetails></div> */}
          </Accordion>
          </li>
  );

        };

